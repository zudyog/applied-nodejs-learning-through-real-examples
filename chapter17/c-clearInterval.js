const https = require('https');

// Function to fetch stock price
function fetchStockPrice(stockSymbol) {
    const url = `https://api.example.com/stocks/${stockSymbol}`;
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log(`Latest stock price of ${stockSymbol}: ${JSON.parse(data).price}`);
        });
    }).on('error', (err) => {
        console.error(`Error fetching stock price: ${err.message}`);
    });
}

// Schedule stock price fetch every 30 seconds
const stockSymbol = 'AAPL';
const intervalID = setInterval(() => fetchStockPrice(stockSymbol), 30000);

// Perhaps after some conditions are met, you decide to stop fetching the stock price
setTimeout(() => {
    clearInterval(intervalID);
    console.log('Stopped fetching stock prices.');
}, 90000); // stops after 90 seconds