async function getStockPrice(stockSymbol) {
    try {
        const response = await axios.get(`https://api.stockdata.org/v1/data/${stockSymbol}`);
        if (!response.data || !response.data.price) {
            throw new Error("Invalid data received from the API");
        }
        console.log('Stock Price:', response.data.price);
    } catch (error) {
        console.error('Failed to fetch stock price:', error.message);
    }
}
