// stockApi.js
const axios = require('axios');
async function getStockPrice(stockSymbol) {
    const response = await axios.get(`https://api.example.com/stocks/${stockSymbol}`);
    return response.data.price;
}
module.exports = { getStockPrice };

// app.js
const stockApi = require('./stockApi');
async function displayStockPrice() {
    const price = await stockApi.getStockPrice('AAPL');
    console.log(`The price of AAPL is $${price}`);
}
displayStockPrice();
