const https = require('https');

function getStockPrice(stockSymbol, callback) {
    const url = `https://api.example.com/stock/${stockSymbol}/price`;
    https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            const price = JSON.parse(data).price;
            callback(null, price);
        });
    }).on('error', (error) => {
        callback(error, null);
    });
}

function displayPrice(error, price) {
    if (error) {
        console.error('Error fetching stock price:', error);
    } else {
        console.log(`The current stock price is $${price}`);
    }
}
getStockPrice('AAPL', displayPrice);