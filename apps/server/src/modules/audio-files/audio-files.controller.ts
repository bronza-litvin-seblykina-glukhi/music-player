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
import { GetSongsDataService } from './services/get-songs-data.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/audio')
export class AudioFilesController {

  constructor(
    private readonly songsService: AddSongService,
    private readonly getDataService: GetSongsDataService
  ) {}

  @Get('songs')
  async getSongs(@Query('userToken') query) {
    return await this.getDataService.getSongs(query);
  }

  @Get('songs-by-lyrics')
  async getSongsByLyrics(@Query('lyricsPath') query) {
    return await this.getDataService.getSongsByLyrics(query);
  }

  @Post('add-song')
  @UseInterceptors(FileInterceptor('file'))
  async addSong(@UploadedFile() file, @Body() body) {
    return await this.songsService.addNewSong(file, body.userToken);
  }
}
