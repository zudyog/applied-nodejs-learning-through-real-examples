const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


// Set up a route to fetch stock prices
app.get('/stock-price/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    try {
        // Replace 'YourAPIKey' with your actual API key
        const response = await axios.get(`https://api.marketstack.com/v1/tickers/${symbol}?access_key=YourAPIKey`);
        const price = response.data.data.last;
        res.send(`The current price of ${symbol} is $${price}`);
    } catch (error) {
        res.status(500).send('Error retrieving stock price');
    }
});
app.listen(port, () => {
    console.log(`Stock price app listening at http://localhost:${port}`);
});
