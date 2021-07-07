import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as path from 'path';

const allowedExt = ['.ico', '.js', '.css', '.scss', '.html', '.jpg', '.png'];
const resolvePath = (file: string) => path.resolve(`./dist/web/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function): any {
    const { url } = req;

    if (url.indexOf('api') > 0) {
      return next();
    }
    else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
      res.sendFile(resolvePath(url));
    }
    else {
      res.sendFile(resolvePath('index.html'));
    }
  }
}
