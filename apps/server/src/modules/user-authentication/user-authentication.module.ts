import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserAuthenticationController } from './controller';
import { AuthenticationMiddleware } from '../../middlewares/authentication.middleware';
import { RegistrationMiddleware } from '../../middlewares/registration.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USER_ENTITIES } from './entities';
import { AuthService } from './services/auth.service';
import { RepositoryLayer } from './services/repository-layer';

@Module({
  controllers: [ UserAuthenticationController ],
  imports: [
    TypeOrmModule.forFeature(USER_ENTITIES)
  ],
  providers: [ AuthService, RepositoryLayer ]
})

export class UserAuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({
        path: 'api/user/authorize',
        method: RequestMethod.ALL
      });
    consumer
      .apply(RegistrationMiddleware)
      .forRoutes({
        path: 'api/user/register',
        method: RequestMethod.ALL
      });
  }
}
