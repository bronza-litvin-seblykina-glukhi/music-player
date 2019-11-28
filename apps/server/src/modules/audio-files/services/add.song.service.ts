import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import * as musicMetaData from 'music-metadata';
import { SongDataInterface } from '../interfaces/song-data.interface';
import { LayerService } from './layer.service';
import { BadRequestException } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { NewSongInterface } from '../interfaces/new-song.interface';

@Injectable()
export class AddSongService {

  constructor(
    private readonly http: HttpService,
    private readonly layerService: LayerService
  ) {}

  public async addNewSong(file: SongDataInterface, userToken: string) {
    let trackUrl = '';

    const { common } = await musicMetaData.parseFile(file.path);
    const { title, artist, genre, album } = common;
    const { defaultSongs, userSongs } = await this.checkForDuplicates(title, userToken);

    if (defaultSongs) {
      return new BadRequestException('This song already exists as default song');
    }
    else if (userSongs) {
      return new BadRequestException('You\'ve already added this song');
    }

    const checkForSameSongsFromOtherUsers = await this.layerService.getSongLinkOfOtherUsers(title, album);

    if (!checkForSameSongsFromOtherUsers) {
      trackUrl  = await this.saveFileToCloud(file);
    }
    else {
      trackUrl = checkForSameSongsFromOtherUsers;
    }

    const addedByData = await this.layerService.getUserData(userToken);
    const artistData = await this.layerService.getArtist(artist);
    const trackId = await this.getSongDetails(title, artist);
    const trackLyrics = await this.getSongLyrics(trackId);

    const songData: NewSongInterface = {
      title: title,
      genre: genre[0],
      url: trackUrl,
      lyrics: trackLyrics,
      uploaded: Date.now(),
      isNew: true,
      countOfListening: 0,
      artist: artistData,
      albumName: album,
      addedBy: addedByData
    };

    return await this.layerService.addNewSong(songData);
  }

  protected async getSongDetails(title: string, artist: string) {
    return await this.http
      .get(
        `http://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.MUSIXMATCH_API}&q_track=${title}&q_artist=${artist}&page_size=150`
      )
      .toPromise()
      .then(songDetails => {
        const { track_id } = songDetails.data.message.body.track_list[0].track;
        return track_id;
      });
  }

  protected async getSongLyrics(trackId: number) {
    return await this.http
      .get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${process.env.MUSIXMATCH_API}&track_id=${trackId}`)
      .toPromise()
      .then(songData => {

        if (!songData.data.message.body.lyrics) {
          return null;
        }

        const { lyrics_body } = songData.data.message.body.lyrics;
        return lyrics_body;
      });
  }

  protected async checkForDuplicates(newTitle: string, userToken: string) {
    const userSongTitles = await this.layerService.getUserSongTitles(userToken);
    const defaultSongTitles = await this.layerService.getDefaultSongTitles();

    const defaultSongs = defaultSongTitles.find(item => item === newTitle);
    const userSongs = userSongTitles.find(item => item === newTitle);

    return { defaultSongs, userSongs };
  }

  protected async saveFileToCloud(file: SongDataInterface) {
    const storage = new Storage();

    await storage
      .bucket(process.env.BUCKET_NAME)
      .upload(file.path, {
        metadata: {
          contentType: file.mimetype,
          cacheControl: 'public, max-age=31536000'
        }
      });


    await storage
      .bucket(process.env.BUCKET_NAME)
      .file(file.filename)
      .makePublic();

    return await storage
      .bucket(process.env.BUCKET_NAME)
      .getFiles()
      .then(files => {
        const addedFile = files[0].find(newFile => newFile.name === file.filename);
        return addedFile.metadata.mediaLink;
      });
  }
}
