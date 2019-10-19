import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

import * as compression from 'compression';
import 'reflect-metadata';

async function bootstrap() {
  const instance = await NestFactory.create(AppModule);
  instance.use(compression());
  await instance.listen(3001);
}
bootstrap().catch(error => {
  console.log('Application bootstrap error!', error);
});
