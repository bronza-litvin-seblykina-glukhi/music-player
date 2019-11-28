import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { LayerService } from './layer.service';

@Injectable()
export class GetDataFromStorageService {
  private projectId: string = process.env.GCLOUD_PROJECT_ID;
  private storage = new Storage();

  constructor(
    private readonly layerService: LayerService
  ) {}

  public async getSongs(userToken: string) {
    const defaultSongs = await this.layerService.getDefaultSongsData();
    const userSongsData = await this.layerService.getUserSongsData(userToken);
    return { defaultSongs: defaultSongs, userSongs: userSongsData };
  }
}
