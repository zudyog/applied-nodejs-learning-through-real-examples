const fs = require('fs');
// Reading stock data synchronously
const data = fs.readFileSync('/path/to/stock-data.json', 'utf8');
// This line won't run until the file reading is complete
console.log(data);