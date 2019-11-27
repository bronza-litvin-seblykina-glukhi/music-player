import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ArtistEntity } from '../entities/artist.entity';
import { SongEntity } from '../entities/song.entity';
import { RepositoryLayer } from '../../user-authentication/services/repository-layer';

@Injectable()
export class LayerService {

  constructor(
    @InjectRepository(ArtistEntity)  private readonly artistEntity: Repository<ArtistEntity>,
    @InjectRepository(SongEntity) private readonly songEntity: Repository<SongEntity>,
    private readonly userLayer: RepositoryLayer
  ) {  }

  public async getDefaultSongTitles() {
    return await this.songEntity
      .find({
        select: ['title'],
        where: { addedBy: null }
      })
      .then(res => {
        return res.map(item => item.title);
      });
  }

  public async getUserSongTitles(userToken: string) {
    const userId = await this.userLayer.getUserAccountId(userToken);

    return await this.songEntity
      .find({
        select: ['title'],
        where: { addedBy: userId }
      })
      .then(res => {
        return res.map(item => item.title);
      });
  }

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
