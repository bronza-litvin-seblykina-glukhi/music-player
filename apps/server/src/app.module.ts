import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';
import { FrontendModule } from './modules/frontend/frontend.module';
import { CronService } from './modules/cron.service';

import { FrontendMiddleware } from './middlewares/frontend.middleware';
import { AudioFilesModule } from './modules/audio-files/audio-files.module';

@Module({
  imports: [
    UserAuthenticationModule,
    FrontendModule,
    AudioFilesModule,
    TypeOrmModule.forRoot()
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
