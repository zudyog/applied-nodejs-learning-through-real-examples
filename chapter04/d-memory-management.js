const express = require('express');
const app = express();
const PORT = 3000;
let stockPrices = {};
app.get('/updatePrice', (req, res) => {
    const { stockId, price } = req.query;
    stockPrices[stockId] = price;
    res.send(`Updated price of ${stockId} to ${price}`);
});
app.get('/getPrice', (req, res) => {
    const { stockId } = req.query;
    res.send(`The price of ${stockId} is ${stockPrices[stockId]}`);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
