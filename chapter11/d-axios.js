const axios = require('axios');

async function getStockPrice(ticker) {
    try {
        const response = await axios.get(`https://api.stockdata.org/v1/data/${ticker}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
