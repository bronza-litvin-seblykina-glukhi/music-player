import { Injectable } from '@nestjs/common';
import mysqldump from 'mysqldump';
import { CronJob } from 'cron';

@Injectable()
export class CronService {

  constructor() {
    this.createMysqlDump();
  }

  private createMysqlDump() {
    new CronJob('00 00 23 * * *', () => {
      mysqldump({
        connection: {
          host: process.env.HOST,
          user: process.env.DB_USER,
          password: process.env.PASSWORD,
          database: process.env.DATABASE
        },
        dumpToFile: './music_payer.dump.sql'
      });
    }, null, true, 'Europe/Kiev');
  }
}
