const axios = require('axios');

global.apiUrl = "https://api.example.com/stocks";

function getStockPrice(stockTicker) {
    axios.get(`${global.apiUrl}/${stockTicker}`)
        .then(response => {
            console.log(`The price of ${stockTicker} is $${response.data.price}`);
        })
        .catch(error => {
            console.error('Error fetching stock price:', error);
        });
}
getStockPrice("AAPL");
