const stockPrices = { 'AAPL': 150, 'GOOGL': 2750, 'MSFT': 300 };
// Example stock prices
function checkStockPrice(stock, targetPrice) {
    setTimeout(() => {
        let currentPrice = stockPrices[stock];
        console.log(`Checking price for ${stock}, which is currently $${currentPrice}`);
        if (currentPrice < targetPrice) {
            console.log(`Time to buy ${stock}! Price is $${currentPrice}`);
        } else {
            console.log(`${stock} has not reached the target price of $${targetPrice} yet.`);
        }
    }, 3000); // Check after 3 seconds
}
checkStockPrice('AAPL', 140);
// Call the function with AAPL stock and a target price of 140