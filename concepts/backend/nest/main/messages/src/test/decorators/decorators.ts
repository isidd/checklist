import { createParamDecorator,ExecutionContext } from "@nestjs/common";


export class MyPrams{
    constructor(){}
}

export const currentUser = createParamDecorator(
    (data:never,context:ExecutionContext) =>{
        const request = context.switchToHttp().getRequest();
        console.log(request.body);
        
    }
)
