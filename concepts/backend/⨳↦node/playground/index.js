const express = require("express");
var http = require("http");
const { connectDataBase } = require("./watchdog/dbGate");

const entryGate = require("./watchdog/entryGate").Routes;
let app = express();
app.use(express.json());
// Setting the routes at entry.
entryGate(app);

connectDataBase();

// var server = http.createServer(express());
// app.use('/',(req,res,next)=>{
//     res.send("it is working")
//     next()
// })
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("applicaton is running"));
// server.listen(PORT,()=>{console.log(`Application is up on port: ${PORT}`)})
