import { HttpModule, Module } from '@nestjs/common';
import { AudioFilesController } from './audio-files.controller';
import { AddSongService } from './services/add.song.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GetSongsDataService } from './services/get-songs-data.service';
import { RepositoryLayer } from '../user-authentication/services/repository-layer';

import { AUDIO_FILES_ENTITIES } from './entities';
import { LayerService } from './services/layer.service';
import { USER_ENTITIES } from '../user-authentication/entities';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [ AudioFilesController ],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      AUDIO_FILES_ENTITIES[0],
      AUDIO_FILES_ENTITIES[1],
      USER_ENTITIES[0],
      USER_ENTITIES[1],
    ]),
    MulterModule.register({
      dest: './uploads'
    }),
  ],
  providers: [
    RepositoryLayer,
    AddSongService,
    LayerService,
    GetSongsDataService
  ]
})

export class AudioFilesModule {  }
