import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
  IsBoolean
} from 'class-validator';

export class RegisterValidation {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString()
  role: string;

  // @IsString()
  // birthday: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsBoolean()
  paidSubscription: boolean;
}
