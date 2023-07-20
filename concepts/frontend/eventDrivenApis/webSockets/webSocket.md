Link : https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship

Overview :
Its way to transfer data in real time by creating a 2 way connection b/w a client and a server
So if we are dealing with a highly changing data instead of refreshing a browser again and again creating a new http request
we can use web sockets to do that
we can use polling -> after an interval we call the server for new data

Client -> will send an http request to server asking for open a connection
in response Server will send switching response -> at this point the handshake is complete
TCP/IP -> connection left open
BE
const WebSocket = require('ws')
const server = new WebSocket.server({port:8080})
server.on('connection',socket=>{
socket.on('message',message=>{
socket.send(`Received that`)
})
})

FE -> built in web socket class
const socket = new WenSocket('ws://localhost:8080')
socket.onmessage = ({data}=>{
console.log('message from server',data)
})

document.querySelector('button').onclick = ()=>{
socket.send('hello')
}

Problem with wen Sockets is that it does not emit the messages to all client
for eg : Group chat
Sol : socket.io
WebRTC -> real time communication | but it is for browser to browser communication primary for video and voice
WebTransport -> its a better version of web sockets faster handshake better reliability

Web Sockets ->
Pros
-> Bidirectional low latency communication
-> Reduced overhead of Http request
Cons
-> Client responsible for connection
-> Scalability challenges
