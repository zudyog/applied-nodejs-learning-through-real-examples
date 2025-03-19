const https = require('https');

function fetchStockPrice(stockSymbol, callback) {
    const url = `https://api.example.com/stock/${stockSymbol}`;
    https.get(url, (response) => {
        let data = '';
        // Receive data in chunks
        response.on('data', (chunk) => {
            data += chunk;
        });
        // When all data has been received
        response.on('end', () => {
            const stockPrice = JSON.parse(data).price;
            callback(null, stockPrice);
        });
    }).on('error', (error) => {
        callback(error, null);
    });
}
fetchStockPrice('AAPL', (error, price) => {
    if (error) {
        console.error('Error fetching stock price:', error);
    } else {
        console.log('The current stock price of AAPL is:', price);
    }
});
