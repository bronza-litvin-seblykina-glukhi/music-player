import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailMissedException extends HttpException {
  constructor() {
    super('', HttpStatus.UNAUTHORIZED);
  }
}
