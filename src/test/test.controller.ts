import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    constructor(private readonly testService: TestService) {}

    @MessagePattern({cmd: 'test_request'})
    async handleTestMessageRequest(data: any): Promise<string> {
        let result = await this.testService.handleTestMessageRequest(data);
        return result;
    }
}
