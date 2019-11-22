import { Module } from '@nestjs/common';
import { AudioFilesController } from './audio-files.controller';
import { AddSongService } from './services/add.song.service';

import { HttpModule } from '@nestjs/common';
import { GetDataFromStorageService } from './services/get-data-from-storage.service';

@Module({
  controllers: [ AudioFilesController ],
  imports: [ HttpModule ],
  providers: [
    AddSongService,
    GetDataFromStorageService
  ]
})

export class AudioFilesModule {  }
