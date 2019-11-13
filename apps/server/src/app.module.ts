import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';
import { FrontendModule } from './modules/frontend/frontend.module';
import { CronService } from './modules/cron.service';

import * as dbConfig from '../../../ormconfig.js';
import { FrontendMiddleware } from './middlewares/frontend.middleware';

@Module({
  imports: [
    UserAuthenticationModule,
    FrontendModule,
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [],
  providers: [ CronService ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes({
        path: '/',
        method: RequestMethod.ALL
      });
  }
}
