import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { SongEntity } from './song.entity';

@Entity('artists')
export class ArtistEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 165, nullable: false })
  artist: string;

  @OneToMany(() => SongEntity, data => data.artist)
  song: SongEntity;
}
