import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class AuthValidation {
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
