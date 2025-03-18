const axios = require('axios');

async function fetchStockPrice(stockSymbol) {
    const response = await axios.get(`https://api.stockprice.com/v1/${stockSymbol}`);
    return response.data.price;
}

async function calculateAveragePrice(stockSymbols) {
    const prices = await Promise.all(stockSymbols.map(fetchStockPrice));
    const average = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    return average;
}

async function main() {
    const symbols = ['AAPL', 'GOOGL', 'MSFT'];
    const averagePrice = await calculateAveragePrice(symbols);
    console.log(`Average Stock Price: $${averagePrice}`);
}
main();