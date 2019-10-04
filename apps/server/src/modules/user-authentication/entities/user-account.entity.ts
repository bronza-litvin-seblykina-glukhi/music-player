import {
  Entity,
  Column,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { RoleEnum } from '../enums';
import { AccessTokenEntity } from './access-token.entity';

@Entity('userAccount')
export class UserAccountEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true
  })
  login: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  password: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    nullable: false
  })
  role: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
    type: 'boolean',
    nullable: false
  })
  paidSubscription: boolean;

  @OneToOne(() => AccessTokenEntity, data => data.user)
  accessToken: AccessTokenEntity;
}
