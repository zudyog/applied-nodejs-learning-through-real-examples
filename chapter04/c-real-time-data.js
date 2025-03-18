const express = require('express');

const WebSocket = require('ws');

const app = express();

const server = require('http').createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        // Broadcast incoming message to all clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

server.listen(3000, () => {
    console.log('Stock Market App running on port 3000');
});
