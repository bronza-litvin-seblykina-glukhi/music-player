import { Injectable } from '@nestjs/common';
import { RepositoryLayer } from './repository-layer';

@Injectable()
export class AuthService {

  constructor(private readonly repositoryLayer: RepositoryLayer) {  }

  public async userRegister(registerData: object): Promise<any> {
    return await this.repositoryLayer.registerUser(registerData)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  public async userAuthorize(authData: object) {
    console.log(authData);
  }

}
