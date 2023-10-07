import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";


@Injectable()
export class MessageRepository{
    async findOne(id:string){
        const contents = await readFile('messages.json','utf-8')
        const messages = JSON.parse(contents)
        return messages[id] ;
    }

    async findAll(){
        const contents = await readFile('messages.json','utf-8')
        const messages = JSON.parse(contents)
        return messages
    }

    async create(message:string){
        const crypto = require("crypto");
        const id = crypto.randomBytes(16).toString("hex");
        const content = await readFile("messages.json",'utf-8')
        console.log(content)
        const messages = JSON.parse(content)
        messages[id] = {id, content :message};
        await writeFile("messages.json",JSON.stringify(messages))
        return {
            id : {
                id, content : message
            },
            status : "message created successfully..!"
        }

    }
}


