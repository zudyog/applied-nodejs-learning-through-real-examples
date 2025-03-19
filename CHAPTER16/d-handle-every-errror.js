const request = require('request');

const fs = require('fs');

function fetchStockData(stockSymbol, callback) {
    const url = `http://api.marketstack.com/v1/tickers/${stockSymbol}`;
    request(url, (err, response, body) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, JSON.parse(body));
    });
}

function processStockData(data, callback) {
    // Process data
    const processedData = data; // Simplified for example
    callback(null, processedData);
}

function saveStockData(data, callback) {
    fs.writeFile('/path/to/output', JSON.stringify(data), (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, 'Success');
    });
}

// Usage
fetchStockData('AAPL', (err, data) => {
    if (err) {
        console.error('Error fetching data:', err);
        return;
    }
    processStockData(data, (err, processedData) => {
        if (err) {
            console.error('Error processing data:', err);
            return;
        }
        saveStockData(processedData, (err, result) => {
            if (err) {
                console.error('Error saving data:', err);
                return;
            }
            console.log(result);
        });
    });
});
