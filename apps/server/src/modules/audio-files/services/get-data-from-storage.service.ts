import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class GetDataFromStorageService {
  private projectId: string = process.env.GCLOUD_PROJECT_ID;
  private storage = new Storage({
    projectId: this.projectId
  });

  public async getSongsFormStorage() {
    // return await this.storage
    //   .getBuckets()
    //   .then(result => {
    //     const [buckets] = result;
    //     return buckets.find(bucket => bucket.name === process.env.BUCKET_NAME);
    //   })
    //   .catch(err => {
    //     console.error(err.message);
    //   });
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
