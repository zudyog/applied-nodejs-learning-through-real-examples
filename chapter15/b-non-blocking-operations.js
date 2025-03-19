const fs = require('fs');
// Reading stock data asynchronously
fs.readFile('/path/to/stock-data.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
// This line runs immediately, without waiting for the file reading to complete
console.log("Reading stock data...");
