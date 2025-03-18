const axios = require('axios');
async function fetchStockPrice(stockSymbol) {
    const API_URL = `https://api.example.com/stock/${stockSymbol}`;
    try {
        const response = await axios.get(API_URL);
        console.log(`The current price of ${stockSymbol} is $${response.data.price}`);
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}
fetchStockPrice('AAPL');