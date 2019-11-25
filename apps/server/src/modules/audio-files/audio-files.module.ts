import { Module } from '@nestjs/common';
import { AudioFilesController } from './audio-files.controller';
import { AddSongService } from './services/add.song.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/common';
import { GetDataFromStorageService } from './services/get-data-from-storage.service';

import { AUDIO_FILES_ENTITIES } from './entities';
import { LayerService } from './services/layer.service';

@Module({
  controllers: [ AudioFilesController ],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature(AUDIO_FILES_ENTITIES)
  ],
  providers: [
    AddSongService,
    LayerService,
    GetDataFromStorageService
  ]
})

export class AudioFilesModule {  }
