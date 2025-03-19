// Using asynchronous file reading in Node.js
const fs = require('fs');
fs.readFile('/path/to/stock-data.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    processStockData(data);
});
function processStockData(data) {
    // processing data
    console.log('Processing stock data...');
}
