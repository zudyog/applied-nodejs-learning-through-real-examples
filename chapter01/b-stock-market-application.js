const express = require('express');
const axios = require('axios'); // Used for HTTP requests
const app = express();
const PORT = 3000;
// Route to get stock price
app.get('/stock/:symbol', async (req, res) => {
    try {
        // Replace 'your_api_key' with your actual API key
        const response = await axios.get(`https://api.stockdata.org/v1/data/quote?symbols=${req.params.symbol}&api_token=your_api_key`);
        res.json({
            symbol: req.params.symbol,
            price: response.data.data[0].last_price
        });
    } catch (error) {
        res.status(500).send('Error retrieving stock data');
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
