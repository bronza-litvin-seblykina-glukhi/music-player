import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as md5 from 'md5';

import { AuthInterface } from '../interfaces/auth.interface';
import { RegisterInterface } from '../interfaces/register.interface';

// ENTITIES
import { UserAccountEntity } from '../entities/user-account.entity';
import { AccessTokenEntity } from '../entities/access-token.entity';

@Injectable()
export class RepositoryLayer {

  constructor(
    @InjectRepository(UserAccountEntity) private readonly userAccountEntity: Repository<UserAccountEntity>,
    @InjectRepository(AccessTokenEntity) private readonly accessTokenEntity: Repository<AccessTokenEntity>
  ) {  }

  public async getUserAccountId(userToken: string) {
    const user = await this.accessTokenEntity.findOne({
      where: { token: userToken },
      join: {
        alias: 'userAccount',
        innerJoinAndSelect: {
          user: 'userAccount.user'
        }
      }
    });

    return user.user.id;
  }

  public async authorizeUser(authData: AuthInterface) {
    const userId =  await this.userAccountEntity.findOne({
      select: ['id'],
      where: authData
    });

    return await this.accessTokenEntity.findOne({
      select: ['token'],
      where: {
        userId: userId.id
      }
    });
  }

  public async registerUser(registerData: RegisterInterface): Promise<any> {
    return await this.userAccountEntity.save(registerData)
      .then(async result => {
        const newAccessToken = {
          token: md5((result.id + Date.now()).toString()),
          user: result,
        };
        return await this.accessTokenEntity.save(newAccessToken);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
