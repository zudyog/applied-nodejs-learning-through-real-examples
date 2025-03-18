const stocks = [
    { symbol: "AAPL", prices: [150, 152, 149] },
    { symbol: "GOOGL", prices: [1200, 1195, 1198] },
    { symbol: "MSFT", prices: [300, 305, 298] },
];

function calculateAveragePrice(stock) {
    const total = stock.prices.reduce((acc, price) => acc + price, 0);
    return total / stock.prices.length;
}

function main() {
    stocks.forEach(stock => {
        const averagePrice = calculateAveragePrice(stock);
        console.log(`The average price of ${stock.symbol} is $${averagePrice.toFixed(2)}`);
    });
}
main();