import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { LayerService } from './layer.service';

@Injectable()
export class GetDataFromStorageService {
  private projectId: string = process.env.GCLOUD_PROJECT_ID;
  private storage = new Storage({
    projectId: this.projectId
  });

  constructor(
    private readonly layerService: LayerService
  ) {}

  public async getDefaultSongs() {
    return await this.layerService.getDefaultSongsData();
  }

  public async getSongsFormStorage() {
    return await this.storage
      .bucket(process.env.BUCKET_NAME)
      .getFiles()
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
