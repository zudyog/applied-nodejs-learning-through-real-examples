const axios = require('axios');

async function getStockPrice(stockSymbol) {
    try {
        const response = await axios.get(`https://api.stockdata.org/v1/data/${stockSymbol}`);
        console.log('Stock Price:', response.data.price);
    } catch (error) {
        console.error('Failed to fetch stock price:', error);
    }
}
