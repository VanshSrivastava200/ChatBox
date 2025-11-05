import { Server } from "socket.io";
import express from 'express'
import {createServer} from 'node:http'

const app =express()
const server =createServer(app)
const io=new Server(server,{cors:{
    origin:'*'
}})

const room="group"

io.on('connection',(socket)=>{
    console.log("A user has connected : "+socket.id)
    socket.on('joinRoom',async (userName)=>{
        console.log(`${userName} is joining the Group`)
        await socket.join(room)
        // io.to(room).emit("roomNotice",userName)
        socket.to(room).emit("roomNotice",userName)
    })
    socket.on('message',async (object)=>{
        console.log(object.name)
        console.log(object.message)
        socket.to(room).emit('message',object)
    })
})

server.listen(3000,()=>{
    console.log("Server running at port 3000")
})