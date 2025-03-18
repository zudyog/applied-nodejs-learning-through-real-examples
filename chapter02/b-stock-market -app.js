const axios = require('axios');
async function fetchStockData(stockSymbol) {
    try {
        const response = await axios.get(`https://api.iextrading.com/1.0/stock/${stockSymbol}/quote`);
        console.log('Stock Name:', response.data.companyName);
        console.log('Latest Price:', response.data.latestPrice);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}
fetchStockData('AAPL');  // Example for Apple Inc.
