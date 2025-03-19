function fetchStockPrice(stock) {
    console.log(`Fetching price for ${stock}`);
    // Assume getPrice is a function that fetches the price of the stock
    getPrice(stock, price => {
        console.log(`${stock} current price: $${price}`);
    });
}
setInterval(() => fetchStockPrice('GOOGL'), 5000);
// Fetches Google's stock price every 5 seconds.