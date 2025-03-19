const https = require('https');

// Making an asynchronous HTTP request
https.get('https://api.stockdata.org/v1/data', (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    // The whole response has been received.
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

console.log('Fetching stock market data...');