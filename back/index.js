const express = require('express')
const app = express()
const io = require('socket.io');
app.get('/', function (req, res) {
  res.send('Hello World')
})
const server=app.listen(3010,(err)=>{
    console.log(`app listen 3010`);
})
const socket = io(server, {
    cors: {
      origin: "http://localhost:3000",
    }})
const mySocket = socket.of(`/socket`)
mySocket.on("connection",(soket)=>{
    console.log(`new user connected`);
setInterval(()=>{
    soket.emit("balance",{
        balance:((Math.floor(Math.random()*9000)+1000)*100),
        tavankharid:((Math.floor(Math.random()*9000)+1000)*100)
    })
},4000)
socket.on("disconnect",()=>{
    console.log(`user disconnected`); 
})








})

 







app.listen(4000)