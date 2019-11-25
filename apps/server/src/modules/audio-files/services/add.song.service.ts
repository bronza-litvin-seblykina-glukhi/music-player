import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { SongDataInterface } from '../interfaces/song-data.interface';
import * as musicMetadata from 'music-metadata';

@Injectable()
export class AddSongService {

  constructor(
    private readonly http: HttpService
  ) {}

  public async addNewSong(songData: SongDataInterface) {
    return await this.getBasicSongData(process.env.AUDIO_FILE_PATH);
  }

  protected async getBasicSongData(songFilePath: string) {
    const data = await this.getSongDetails('Warriors Of The World United', 'Manowar');

    console.log(JSON.stringify(data));
  }


  protected async getSongDetails(title: string, artist: string) {
     return await this.http
       .get(
         `http://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.MUSIXMATCH_API}&q_track=${title}&q_artist=${artist}&page_size=150`
       ).toPromise()
       .then(async res => {
         const { track_id } = res.data.message.body.track_list[0].track;
         return await this.getSongLyrics(track_id);
       })
       .catch(err => {
         console.error(err);
       });
  }

  protected async getSongLyrics(trackId: number) {
    return await this.http
      .get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${process.env.MUSIXMATCH_API}&track_id=${trackId}`)
      .toPromise()
      .then(
        res => {
          const { lyrics_body } = res.data.message.body.lyrics;
          return lyrics_body;
        })
      .catch(err => {
        console.error(err);
      });
  }
}
