import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { MyPrams, currentUser } from './decorators/decorators';
import { UseInterceptors, } from '@nestjs/common';

@Controller('test')
export class TestController {
    constructor(private testController : TestService){

    }
    @Get()
    checkTest(@currentUser() user : any): string{
        console.log(user)
        return this.testController.getTest()
    }
}
