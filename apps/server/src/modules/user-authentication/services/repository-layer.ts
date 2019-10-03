import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// ENTITIES
import { UserAccountEntity } from '../entities/user-account.entity';

@Injectable()
export class RepositoryLayer {

  constructor(
    @InjectRepository(UserAccountEntity) private readonly userAccountEntity: Repository<UserAccountEntity>
  ) {  }

  public authorizeUser(authData: object) {}

  public async registerUser(registerData: object): Promise<any> {
    return await this.userAccountEntity.save(registerData)
      .catch(error => {
        console.log(error);
      });
  }

}
