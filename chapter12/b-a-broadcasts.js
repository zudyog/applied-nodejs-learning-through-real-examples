const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
    const sendStockUpdate = () => {
        // Simulate a stock price update
        const stockPrice = Math.floor(100 + Math.random() * 100);
        ws.send(JSON.stringify({ stock: 'XYZ Corp', price: stockPrice }));
    };
    // Send updates every second
    setInterval(sendStockUpdate, 1000);
});
console.log('WebSocket server is running on port 8080...');