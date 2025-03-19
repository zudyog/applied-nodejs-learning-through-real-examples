const http = require('http');

const { readFile } = require('fs').promises;

http.createServer(async (req, res) => {
    if (req.url === '/stock-info') {
        try {
            const data = await readFile('./stock-data.json');
            const stocks = JSON.parse(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(stocks));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ message: 'Error loading stock data' }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Resource not found' }));
    }
}).listen(3000, () => console.log('Server is running on http://localhost:3000'));