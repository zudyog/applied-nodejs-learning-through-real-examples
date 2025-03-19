const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
app.get('/stock/:symbol', async (req, res) => {
    try {
        const response = await axios.get(`https://api.finance.com/stocks/${req.params.symbol}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching stock data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


