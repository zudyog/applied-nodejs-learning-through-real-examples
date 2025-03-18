const fetch = require('node-fetch');

async function getStockPrice(stockSymbol) {
    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`The current price of ${stockSymbol} is $${data.c}`);
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}
getStockPrice('AAPL'); // Fetch the current price of Apple Inc.