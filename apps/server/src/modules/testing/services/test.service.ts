import { Injectable } from '@nestjs/common';

@Injectable()

export class TestService {

    constructor() {}

    public getTestData(): object {
        return {
            name: 'test',
            surname: 'test'
        };
    }

}
