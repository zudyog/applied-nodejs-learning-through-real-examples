const express = require('express');
const fetch = require('node-fetch');

const app = express();

const PORT = 3000;

// Endpoint to fetch stock prices
app.get('/stocks/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    const apiUrl = `https://api.finance.com/prices?symbol=${symbol}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send('Error retrieving stock data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
