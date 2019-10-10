import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';
import { CronService } from './modules/cron.service';

import * as dbConfig from '../../../ormconfig.js';

@Module({
  imports: [
    UserAuthenticationModule,
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [],
  providers: [ CronService ],
})
export class AppModule {}
