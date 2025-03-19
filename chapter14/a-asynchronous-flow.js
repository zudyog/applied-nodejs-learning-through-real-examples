const axios = require('axios');

function fetchStockPrice(stockSymbol) {
    return axios.get(`https://api.stockprice.com/${stockSymbol}`);
}
async function analyzeStocks() {
    try {
        console.log('Starting to fetch stock prices...');
        const applePrice = await fetchStockPrice('AAPL');
        const googlePrice = await fetchStockPrice('GOOGL');
        const amazonPrice = await fetchStockPrice('AMZN');
        console.log('All stock prices fetched, now analyzing...');
        // Perform analysis logic here
        console.log('Analysis complete.');
    } catch (error) {
        console.error('Error fetching stock prices:', error);
    }
}
analyzeStocks();