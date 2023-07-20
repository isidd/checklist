Link : https://www.youtube.com/watch?v=Bm0JjR4kP8w&ab_channel=WebDevSimplified

Overview:

const socket = new WebSocket('ws://localhost:8080')
socket.onmessage = ({data}=>{
Notification.requestPermission().then(prem=>{
if(prem == 'granted'){
let notification = new Notification('Example Notification',{
body : 'this is example notification',
data : {hello:"world"}
})
notification.addEventListener('close',()=>console.log(e))
}
})
})
