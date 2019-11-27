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

  public async getDefaultSongs() {
    await this.getSongsFormStorage();
    return await this.layerService.getDefaultSongsData();
  }

  public async getSongsFormStorage() {
    return await this.storage
      .bucket(process.env.BUCKET_NAME)
      .getFiles()
      .then(res => {
        const file = res[0].find(item => item.name === '08. Warriors Of The World United.mp3');

        console.log(file.metadata.mediaLink);

        return res;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
