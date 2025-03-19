const https = require('https');

// Function to get stock price
function getStockPrice(stockSymbol, callback) {
    const url = `https://api.example.com/stock-price/${stockSymbol}`;
    https.get(url, (response) => {
        let data = '';
        // A chunk of data has been received.
        response.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        response.on('end', () => {
            const stockPrice = JSON.parse(data).price;
            callback(null, stockPrice);
        });
    }).on('error', (error) => {
        callback(error, null);
    });
}
// Using the getStockPrice function
getStockPrice('AAPL', (error, price) => {
    if (error) {
        console.error('Error fetching stock price:', error);
    } else {
        console.log(`The current price of AAPL is $${price}`);
    }
});
