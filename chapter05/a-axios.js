const axios = require('axios');

axios.get('https://api.example.com/stock-data')
    .then(response => {
        console.log('Stock Data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

