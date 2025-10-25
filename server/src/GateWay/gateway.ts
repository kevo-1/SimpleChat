import { OnModuleInit } from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketServer,
    WebSocketGateway,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3001,{
    cors: {
        origin: '*',
        credentials: true,
    }
})
export class gatewayHandler implements OnModuleInit {
    @WebSocketServer()
    server: Server

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(`${socket.id} is connected`);
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: string) {
        console.log(body);
        this.server.emit('onMessage', body);
    }
}