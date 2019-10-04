import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

import * as sha1 from 'sha1';

@Injectable()
export class RegistrationMiddleware implements  NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    req.body.password = sha1(req.body.password);
    return next();
  }
}
