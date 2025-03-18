const fetch = require('node-fetch');

// GET Request
async function getStockPrice(stockSymbol) {
    const url = `https://api.example.com/stocks/${stockSymbol}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('Stock Price:', data.price);
}

// POST Request
async function addStock(stockData) {
    const url = `https://api.example.com/stocks`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(stockData),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log('Response:', data);
}

// PUT Request
async function updateStock(stockSymbol, newPrice) {
    const url = `https://api.example.com/stocks/${stockSymbol}`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ price: newPrice }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log('Updated Stock:', data);
}

// DELETE Request
async function deleteStock(stockSymbol) {
    const url = `https://api.example.com/stocks/${stockSymbol}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    console.log('Deletion Status:', response.status);
}


getStockPrice('AAPL');
addStock({ symbol: 'GOOGL', price: 2700 });
updateStock('GOOGL', 2720);
deleteStock('GOOGL');