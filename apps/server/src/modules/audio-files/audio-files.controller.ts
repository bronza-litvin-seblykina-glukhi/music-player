import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { AddSongService } from './services/add.song.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/audio')
export class AudioFilesController {

  constructor(
    private readonly songsService: AddSongService
  ) {}

  @Post('add-song')
  async addSong(@Body() body) {
    return await this.songsService.addNewSong(body);
  }
}
