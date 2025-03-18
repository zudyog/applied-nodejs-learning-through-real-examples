// Import required modules
const express = require('express');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = require('node-fetch');
// Initialize the application
const app = express();
const PORT = 3000;
// Endpoint to fetch stock data and return HTML
app.get('/stock-info', async (req, res) => {
    const stockData = await fetch('https://api.example.com/stocks').then(response => response.json());
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    let content = dom.window.document.querySelector("p");
    // Updating the DOM with stock data
    content.textContent = `Stock Price: ${stockData.price}`;
    // Send the manipulated HTML as a response
    res.send(dom.serialize());
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
