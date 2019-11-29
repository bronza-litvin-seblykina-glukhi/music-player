import { Injectable } from '@nestjs/common';
import { LayerService } from './layer.service';

@Injectable()
export class GetSongsDataService {

  constructor(
    private readonly layerService: LayerService
  ) {}

  public async getSongs(userToken: string) {
    const defaultSongs = await this.layerService.getDefaultSongsData();
    const userSongsData = await this.layerService.getUserSongsData(userToken);
    
    return { defaultSongs: defaultSongs, userSongs: userSongsData };
  }

  public async getSongsByLyrics(lyricsPath: string, userToken: string) {
    const defaultSongs = await this.layerService.getDefaultSongsDataByLyrics(lyricsPath);
    const userSongsData = await this.layerService.getUserSongsDataByLerics(lyricsPath, userToken);

    return { defaultSongs: defaultSongs, userSongs: userSongsData };
  }
}
