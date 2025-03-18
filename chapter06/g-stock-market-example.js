// stock.js
export const fetchStockPrice = async (symbol) => {
    try {
        const response = await fetch(`https://api.stockservice.com/prices/${symbol}`);
        const data = await response.json();
        return data.price;
    } catch (error) {
        console.error('Failed to fetch stock price:', error);
    }
};

// app.js
import { fetchStockPrice } from './stock';
const displayStockInfo = async (symbol) => {
    const price = await fetchStockPrice(symbol);
    console.log(`The current price of ${symbol} is $${price}`);
};

displayStockInfo('AAPL');