const https = require('https');
// Function to fetch stock price

function fetchStockPrice(stockSymbol) {
    const url = `https://api.example.com/stock/${stockSymbol}/price`;
    https.get(url, (res) => {
        let data = '';
        // A chunk of data has been received.
        res.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        res.on('end', () => {
            console.log(`${stockSymbol} Price: ${JSON.parse(data).price}`);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
// Example stock symbols
const stocks = ['AAPL', 'GOOGL', 'MSFT'];

stocks.forEach(stock => {
    fetchStockPrice(stock);
});
console.log("Fetching stock prices...");