import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// ENTITIES
import { UserAccountEntity } from '../entities/user-account.entity';
import { AccessTokenEntity } from '../entities/access-token.entity';

@Injectable()
export class RepositoryLayer {

  constructor(
    @InjectRepository(UserAccountEntity) private readonly userAccountEntity: Repository<UserAccountEntity>,
    @InjectRepository(AccessTokenEntity) private readonly accessTokenEntity: Repository<AccessTokenEntity>
  ) {  }

  public authorizeUser(authData: object) {}

  public async registerUser(registerData: object): Promise<any> {
    return await this.userAccountEntity.save(registerData)
      .then(async (result: UserAccountEntity) => {
        const newAccessToken = {
          token: '11111111111',
          user: result,
        };
        await this.accessTokenEntity.save(newAccessToken);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
