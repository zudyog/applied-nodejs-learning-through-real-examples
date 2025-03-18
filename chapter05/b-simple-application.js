const axios = require('axios');

async function fetchStockData(stockSymbol) {
    try {
        const response = await axios.get(`https://api.example.com/stock/${stockSymbol}`);
        console.log('Stock Data:', response.data);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

fetchStockData('AAPL'); // Fetch data for Apple Inc.