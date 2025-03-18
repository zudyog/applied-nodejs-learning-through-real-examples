const axios = require('axios');

async function fetchStockPrice(stockSymbol) {
    const API_URL = `https://api.example.com/stocks/${stockSymbol}`;
    try {
        const response = await axios.get(API_URL);
        console.log(`The current price of ${stockSymbol} is $${response.data.price}`);
    } catch (error) {
        console.error('Error fetching stock price:', error.message);
    }
}

fetchStockPrice('AAPL'); // Example: Fetching Apple's stock price