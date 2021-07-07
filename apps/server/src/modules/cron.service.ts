import { Injectable } from '@nestjs/common';
import mysqldump from 'mysqldump';
import { CronJob } from 'cron';
import 'dotenv/config';

@Injectable()
export class CronService {

  constructor() {
    this.createMysqlDump();
  }

  private createMysqlDump() {
    new CronJob('00 00 23 * * *', () => {
      mysqldump({
        connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        },
        dumpToFile: './music_player.dump.sql'
      });
    }, null, true, 'Europe/Kiev');
  }
}
