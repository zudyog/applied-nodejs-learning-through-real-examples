const https = require('https');

// Function to fetch stock data from an API
function fetchStockData(stockSymbol) {
    const url = `https://api.example.com/stock/${stockSymbol}`;
    https.get(url, (response) => {
        let data = '';
        // A chunk of data has been received.
        response.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received.
        response.on('end', () => {
            console.log(JSON.parse(data));
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
// Fetch stock data for Apple Inc.
fetchStockData('AAPL');