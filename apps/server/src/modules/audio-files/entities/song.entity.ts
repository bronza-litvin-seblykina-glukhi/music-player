import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn, JoinColumn,
} from 'typeorm';
import { ArtistEntity } from './artist.entity';
import { UserAccountEntity } from '../../user-authentication/entities/user-account.entity';

@Entity('songs')
export class SongEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  albumName: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  genre: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  url: string;

  @Column({
    type: 'longtext',
    nullable: true
  })
  lyrics: string;

  @Column({
    type: 'bigint',
    nullable: false
  })
  uploaded: number;

  @Column({
    type: 'boolean',
    nullable: false,
    default: true
  })
  isNew: boolean;

  @Column({
    type: 'int',
    nullable: false
  })
  countOfListening: number;

  @Column({
    type: 'int',
    nullable: false
  })
  duration: number;

  @ManyToOne(() => ArtistEntity, data => data.song)
  @JoinColumn()
  artist: ArtistEntity;

  @ManyToOne(() => UserAccountEntity, data => data.song)
  @JoinColumn()
  addedBy: UserAccountEntity;
}
