import {
  Post,
  Body,
  UsePipes,
  Controller
} from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthValidation } from '../../validation/auth-validation';
import { AuthValidationPipe } from '../../pipes/auth-validation.pipe';
import { RegisterValidation } from '../../validation/register-validation';
import { RegisterValidationPipe } from '../../pipes/register-validation.pipe';

@Controller('api/user')
export class UserAuthenticationController {

  constructor(private readonly auth: AuthService) {  }

  @Post('register')
  @UsePipes(new RegisterValidationPipe())
  async registerUser(@Body() body: RegisterValidation) {
    return await this.auth.userRegister(body);
  }

  @Post('authorize')
  @UsePipes(new AuthValidationPipe())
  async authorizeUser(@Body() body: AuthValidation) {
    await this.auth.userAuthorize(body);
  }
}
