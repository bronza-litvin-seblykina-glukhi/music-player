import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AddSongService } from './services/add.song.service';
import { GetDataFromStorageService } from './services/get-data-from-storage.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/audio')
export class AudioFilesController {

  constructor(
    private readonly songsService: AddSongService,
    private readonly getDataService: GetDataFromStorageService
  ) {}

  @Get('songs')
  async getSongs(@Query('userToken') query) {
    return await this.getDataService.getSongs(query);
  }

  @Post('add-song')
  @UseInterceptors(FileInterceptor('file'))
  async addSong(@UploadedFile() file, @Body() body) {
    return await this.songsService.addNewSong(file, body.userToken);
  }
}
