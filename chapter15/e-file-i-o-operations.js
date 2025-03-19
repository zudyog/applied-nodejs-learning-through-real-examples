const fs = require('fs');
// Reading a file asynchronously
fs.readFile('stock-data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('Reading stock data...');
