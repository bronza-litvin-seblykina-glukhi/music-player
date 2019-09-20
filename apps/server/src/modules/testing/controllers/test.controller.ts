import { Controller, Get, Res } from '@nestjs/common';
import { TestService } from '../services/test.service';

@Controller('test')

export class TestController {

    constructor(private readonly testService: TestService) {  }

    @Get('test-data')
    getTestData(@Res() res): void {
        const result  = this.testService.getTestData();
        res.json(result);
    }

}
