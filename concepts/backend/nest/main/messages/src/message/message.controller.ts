import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {


    constructor(public messageService : MessageService){ }

    @Get()
    async listMessage(){
        return await this.messageService.findAll()
    }

    @Post()
    async createMessage(@Body() body : CreateMessageDto){
        return await this.messageService.createMessage(body.content)
    }


    @Get("/:id")
    async getMessage(@Param('id') param : string){
        let message =  await this.messageService.findOne(param)
        if(!message){
             throw new NotFoundException('message not found..!')
        }
        return message
    }


    @Get("/page")
    checkQuery(@Query() page : string){
        console.log(page)
        return {page}
    }
}
