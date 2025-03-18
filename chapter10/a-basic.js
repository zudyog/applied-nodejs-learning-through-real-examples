const axios = require('axios');

const express = require('express');

const app = express();

const PORT = 3000;

// Simulate a function that processes stock data
function processStockData(data) {
    // Imagine some complex calculations here
    for (let i = 0; i < data.length; i++) {
        data[i].price = data[i].price * Math.random(); // Random processing
    }
}

// Endpoint to fetch and process stock data
app.get('/stocks', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/stocks');
        processStockData(response.data);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching stock data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
