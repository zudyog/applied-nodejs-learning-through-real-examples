const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

function sendStockUpdate(ws) {
    const stocks = {
        Apple: 150 + Math.random() * 10,
        Google: 2700 + Math.random() * 20,
        Amazon: 3100 + Math.random() * 30,
    };
    ws.send(JSON.stringify(stocks));
}

wss.on('connection', function connection(ws) {
    console.log('A new client Connected!');
    ws.send('Welcome to the Stock Market Application!');
    const stockInterval = setInterval(() => sendStockUpdate(ws), 1000);
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.on('close', () => {
        console.log('A client has disconnected');
        clearInterval(stockInterval);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
