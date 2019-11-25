import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ArtistEntity } from '../entities/artist.entity';
import { SongEntity } from '../entities/song.entity';

@Injectable()
export class LayerService {

  constructor(
    @InjectRepository(ArtistEntity)  private readonly artistEntity: Repository<ArtistEntity>,
    @InjectRepository(SongEntity) private readonly songEntity: Repository<SongEntity>
  ) {  }

  public async getDefaultSongsData() {
    return await this.songEntity
      .find({
        select: ['title', 'albumName', 'url', 'isNew', 'uploaded', 'countOfListening'],
        join: {
          alias: 'artists',
          innerJoinAndSelect: {
            artist: 'artists.artist'
          }
        }
      });
  }

}
