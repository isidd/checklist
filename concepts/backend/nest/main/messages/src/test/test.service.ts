import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    getTest(){
        return "This is coming from test..!"
    }

}
