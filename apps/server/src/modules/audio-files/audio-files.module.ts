import { Module } from '@nestjs/common';
import { AudioFilesController } from './audio-files.controller';
import { AddSongService } from './services/add.song.service';

import { HttpModule } from '@nestjs/common';

@Module({
  controllers: [ AudioFilesController ],
  imports: [ HttpModule ],
  providers: [ AddSongService ]
})

export class AudioFilesModule {  }
