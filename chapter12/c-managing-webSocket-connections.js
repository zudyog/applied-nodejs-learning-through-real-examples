const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('A new client connected.');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    // Simulating stock price updates
    const stockUpdate = setInterval(() => {
        ws.send(JSON.stringify({ stock: 'XYZ', price: Math.random() * 1000 }));
    }, 1000);
    ws.on('close', function close() {
        clearInterval(stockUpdate);
        console.log('Connection closed');
    });
});
