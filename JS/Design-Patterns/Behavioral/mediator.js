/*
    Mediator design pattern 
        - It is a design pattern where pattern works as middleman 
        - Its a many to many relationsship
        - middleware in express library works on Mediator desin pattern
        - It provides a seperation of concerns and eleminates code duplication
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



