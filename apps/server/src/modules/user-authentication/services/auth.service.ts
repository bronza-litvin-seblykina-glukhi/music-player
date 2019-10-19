import { Injectable } from '@nestjs/common';
import { RepositoryLayer } from './repository-layer';

import { AuthInterface } from '../interfaces/auth.interface';
import { RegisterInterface } from '../interfaces/register.interface';

@Injectable()
export class AuthService {

  constructor(private readonly repositoryLayer: RepositoryLayer) {  }

  public async userRegister(registerData: RegisterInterface): Promise<any> {
    return await this.repositoryLayer.registerUser(registerData)
      .catch(error => {
        console.log(error);
      });
  }

  public async userAuthorize(authData: AuthInterface) {
    return await this.repositoryLayer.authorizeUser(authData);
  }

}
