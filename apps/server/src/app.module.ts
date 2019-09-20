import { Module } from '@nestjs/common';

import { TestModule } from './modules/testing/test-controller.module';

@Module({
  imports: [ TestModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
