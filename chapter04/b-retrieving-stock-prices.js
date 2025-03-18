const axios = require('axios');

async function getStockPrice(stockSymbol) {
    const response = await axios.get(`https://api.stockprice.com/${stockSymbol}`);
    return response.data.price;
}

async function main() {
    const stockSymbol = 'AAPL';
    const price = await getStockPrice(stockSymbol);
    console.log(`The current price of ${stockSymbol} is $${price}.`);
}
main();