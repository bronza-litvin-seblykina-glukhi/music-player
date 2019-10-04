import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserAccountEntity } from './user-account.entity';

@Entity('accessToken')
export class AccessTokenEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true
  })
  token: string;

  @OneToOne(() => UserAccountEntity, data => data.accessToken, { nullable: true })
  @JoinColumn()
  user: UserAccountEntity;
}
