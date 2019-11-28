import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ArtistEntity } from '../entities/artist.entity';
import { SongEntity } from '../entities/song.entity';
import { RepositoryLayer } from '../../user-authentication/services/repository-layer';
import { NewSongInterface } from '../interfaces/new-song.interface';

@Injectable()
export class LayerService {

  constructor(
    @InjectRepository(ArtistEntity)  private readonly artistEntity: Repository<ArtistEntity>,
    @InjectRepository(SongEntity) private readonly songEntity: Repository<SongEntity>,
    private readonly userLayer: RepositoryLayer
  ) {  }

  public async getDefaultSongTitles() {
    return await this.songEntity
      .find({
        select: ['title'],
        where: { addedBy: null }
      })
      .then(res => {
        return res.map(item => item.title);
      });
  }

  public async getUserSongTitles(userToken: string) {
    const userId = await this.userLayer.getUserAccountId(userToken);

    return await this.songEntity
      .find({
        select: ['title'],
        where: { addedBy: userId }
      })
      .then(res => {
        return res.map(item => item.title);
      });
  }

  public async getDefaultSongsData() {
    return await this.songEntity
      .find({
        select: ['title', 'albumName', 'url', 'isNew', 'uploaded', 'countOfListening'],
        where: { addedBy: null },
        join: {
          alias: 'artists',
          innerJoinAndSelect: {
            artist: 'artists.artist'
          }
        }
      });
  }

  public async getUserSongsData(userToken: string) {
    const user = await this.userLayer.getUserData(userToken);

    return await this.songEntity
      .find({
        select: ['title', 'albumName', 'url', 'isNew', 'uploaded', 'countOfListening'],
        where: { addedBy: user },
        join: {
          alias: 'artists',
          innerJoinAndSelect: {
            artist: 'artists.artist'
          }
        }
      });
  }

  public async getArtist(artistName: string) {
    return await this.artistEntity
      .findOne({
        where: { artist: artistName }
      })
      .then(async res => {
        if (!res) {
          return await this.addNewArtist(artistName);
        }

        return await res;
      })
      .catch(err => {
        console.error(err);
      });
  }

  protected async addNewArtist(artistName: string) {
    return await this.artistEntity
      .save({
        artist: artistName
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err);
      });
  }

  public async getSongLinkOfOtherUsers(songTitle: string, albumName: string) {
    return this.songEntity.findOne({
      select: ['url'],
      where: {
        title: songTitle,
        albumName: albumName
      }
    })
      .then(res => {
        if (!res) {
          return undefined;
        }

        return res.url;
      })
      .catch(err => {
        console.error(err);
      });
  }

  public async getUserData(userToken: string) {
    return await this.userLayer.getUserData(userToken);
  }

  public async addNewSong(songData: NewSongInterface) {
    return await this.songEntity
      .save(songData)
      .catch(err => {
        console.error(err);
      });
  }

}
