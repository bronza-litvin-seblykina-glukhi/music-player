import { Module } from '@nestjs/common';
import { FrontendController } from './controller/frontend.controller';

@Module({
  controllers: [ FrontendController ]
})

export class FrontendModule {  }
