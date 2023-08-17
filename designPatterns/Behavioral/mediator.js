/*
    Mediator design pattern 
        - It is a design pattern where pattern works as middleman 
        - Its a many to many relationship
        - middleware in express library works on Mediator design pattern
        - It provides a separation of concerns and eliminates code duplication
 */

import express from ("express") ;
const app = express()

function logger (req,res,next){
    console.log("Request Type : ",req.method)
    next()
}

app.use(logger)

app.get("/",(req,res)=>{
    res.send("Hello World")
})



