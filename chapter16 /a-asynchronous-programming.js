const axios = require('axios');

async function getStockPrice(stockSymbol) {
    try {
        const response = await axios.get(`https://api.stockexchange.com/prices/${stockSymbol}`);
        console.log(`The current price of ${stockSymbol} is ${response.data.price}`);
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}

getStockPrice('AAPL');