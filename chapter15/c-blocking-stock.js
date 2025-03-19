// Example of a blocking code in a Node.js stock market app
const fs = require('fs');
// Reading stock data synchronously
const data = fs.readFileSync('/path/to/stock-data.csv', 'utf8');
processStockData(data);
function processStockData(data) {
    // processing data
    console.log('Processing stock data...');
}
