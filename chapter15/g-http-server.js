const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/stock-price') {
        getStockPrice((error, stockPrice) => {
            if (error) {
                res.writeHead(500);
                return res.end('Error fetching stock price');
            }
            res.writeHead(200);
            res.end(`The current stock price is ${stockPrice}`);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

function getStockPrice(callback) {
    // Simulate a database call
    setTimeout(() => {
        // Let's assume this is fetched from a database
        callback(null, '120.34');
    }, 100); // simulate delay
}
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
