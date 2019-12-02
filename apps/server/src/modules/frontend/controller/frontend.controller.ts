import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path';

@Controller()
// @ts-ignore
export class FrontendController {
  @Get()
  // @ts-ignore
  getClientSide(@Res() res) {
    res.sendFile(path.resolve('./dist/client/index.html'));
  }
}
