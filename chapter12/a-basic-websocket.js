const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('A new client Connected!');
    ws.send('Welcome New Client!');
    setInterval(() => {
        const stockPrice = getCurrentStockPrice(); // Assume this function fetches the latest stock price
        ws.send(JSON.stringify({ stock: 'XYZ Corp', price: stockPrice }));
    }, 1000); // Send stock price updates every second
});

function getCurrentStockPrice() {
    // Logic to fetch the current stock price from a database or API
    return Math.floor(100 + Math.random() * 100); // Mock-up stock price
}
