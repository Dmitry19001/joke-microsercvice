import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    async handleTestMessageRequest(data: any): Promise<string> {
        console.log("handleTestMessageRequest called: " + JSON.stringify(data));
        return `handleTestMessageRequest echoing ${data.text}`;
    }
}
