import {
  Get,
  Post,
  Body,
  Query,
  UsePipes,
  Controller
} from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthValidation } from '../../validation/auth-validation';
import { AuthValidationPipe } from '../../pipes/auth-validation.pipe';
import { RegisterValidation } from '../../validation/register-validation';
import { RegisterValidationPipe } from '../../pipes/register-validation.pipe';
import {ResetInterface} from './interfaces/reset.interface';

@Controller('api/user')
export class UserAuthenticationController {

  constructor(private readonly auth: AuthService) {  }

  @Post('register')
  @UsePipes(new RegisterValidationPipe())
  async registerUser(@Body() body: RegisterValidation) {
    return await this.auth.userRegister(body);
  }

  @Get('user-data')
  async getUserData(@Query('userToken') query) {
    return await this.auth.getUserData(query);
  }

  @Get('token')
  async getAccessTokenByEmailAndLogin(@Query('userEmail') userEmail, @Query('userName') userName){
    return await this.auth.getAccessTokenByEmailAndLogin(userEmail, userName);
  }

  @Post('authorize')
  @UsePipes(new AuthValidationPipe())
  async authorizeUser(@Body() body: AuthValidation) {
    return await this.auth.userAuthorize(body);
  }

  @Post('reset')
  async updateUserPassword(@Body() body: ResetInterface){
    return await this.auth.updateUserPassword(body);
  }
}
