Link : https://www.udemy.com/course/nestjs-the-complete-developers-guide/learn/lecture/27441196#overview

Overview : 

                                                          Nest Server
                        

            |----------------|   |----------------|   |----------------|   |----------------|   |----------------|
            |    Validate    |   |    Make sure   |   |    Route the   |   |     Run the    |   |     Access     |
            | data contained |   |    the user    |   |    request to  |   | business logic |   |    Database    |                
            |     in the     | ↦ |       is       | ↦ | the particular | ↦ |      here      | ↦ |      here      |
            |     request    |   |  Authenticated |   |    Function    |   |                |   |                |
            |----------------|   |----------------|   |----------------|   |----------------|   |----------------|   
            |      Pipe      |   |      Guard     |   |   Controller   |   |     Service    |   |   Repository   |       
            |----------------|   |----------------|   |----------------|   |----------------|   |----------------|




    Part of Nest : 
    

                         Part of Nest
                   |----------------------|
                   |      Controller      | -> handle incoming request
                   |----------------------| 
                   |       Service        | -> Handle data access and business logic 
                   |----------------------| 
                   |       Modules        | -> Group together code 
                   |----------------------| 
                   |        Pipe          | -> Validate incoming data
                   |----------------------|     
                   |        Filter        | -> Handle errors that occurs during request handling
                   |----------------------|     
                   |        Guard         | -> Handle Authentication
                   |----------------------|
                   |      Interceptor     | -> Add extra logic to incoming request or outgoing response
                   |----------------------|     
                   |      Repository      | -> Handle Database calls 
                   |----------------------|


      Nest-cli (@nest/cli)
            npm install -g @nest/cli
      
        - Create a new Project : 
                  nest new [project name]
      
        - Create a module :
                  nest generate module [module name]

        - Create Controller :
                  nest generate controller [folder name]/[controller name] --flat
                  * create a controller under a folder name and (--flat) don't create a extra folder called controllers

                        POST /message/5?validate=true
                              - @Headers() 
                                    -> HOST : localhost:3000 
                                    -> content-type : application/json
                              - @Param('id')
                                    -> id : 5
                              - @Query()
                                    -> validate : true
                              - @Body()
                                    -> {"content":"hi there"}

                              ```js
                                          @Controller('message')
                                          class Name {
                                            @Get()
                                            method1{
                                                return "1"
                                            }

                                            @Post(@Body() body : any){
                                                return "2"
                                            }

                                            @Get(@Param("id") param : string){
                                                return "3"
                                            }

                                          }


                              ```


      SetUp Automatic Validation

                  > Tell nest to use global Validation
                  > create a class that describe the different properties that the request body should have 
                      Data Transfer Object  (DTO)
                  > Add validation rules to class 
                      Using lib -> class-validator class-transformer
                  > apply that class to the request handler 


      DI Containers and Injectable 
                  > https://www.udemy.com/course/nestjs-the-complete-developers-guide/learn/lecture/27441362#overview



      Creating Modules, Services and Controller 

            >  nest g module [name]
            >  nest g service [name]
            >  nest g controller [name]






Testing : 


