const axios = require('axios');

async function fetchStockPrice(stockSymbol) {
    try {
        const response = await axios.get(`https://api.marketstack.com/v1/tickers/${stockSymbol}?access_key=YOUR_ACCESS_KEY`);
        const price = response.data.data.last;
        console.log(`The current price of ${stockSymbol} is $${price}`);
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}

fetchStockPrice('AAPL');  // Example stock symbol for Apple Inc.