import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): any {

    if (req.body.loginData.indexOf('@') !== -1) {
      req.body = {
          email: req.body.loginData,
          password: req.body.password
        };
        return next();
      } else {
        req.body = {
          login: req.body.loginData,
          password: req.body.password,
        };
        return next();
      }
    }
}
