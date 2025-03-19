const fetch = require('node-fetch'); // node-fetch to make HTTP requests

function getStockData(stockSymbol) {
    const API_URL = `https://api.example.com/stocks/${stockSymbol}`;
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Stock Data:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
            throw error; // rethrow the error for further handling if needed
        });
}

getStockData('AAPL')
    .then(data => {
        // process the data further
        console.log('Processing data:', data);
    })
    .catch(error => {
        // handle any errors
        console.error('Failed to process stock data:', error);
    });
