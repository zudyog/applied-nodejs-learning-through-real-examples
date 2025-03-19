const EventEmitter = require('events');

class StockTicker extends EventEmitter {
    constructor(stock) {
        super();
        this.stock = stock;
    }
    updateStockPrice(newPrice) {
        console.log('Updating stock price...');
        process.nextTick(() => {
            this.emit('priceUpdated', newPrice);
        });
    }
}

const ticker = new StockTicker('XYZ Corp');
ticker.on('priceUpdated', (newPrice) => {
    console.log(`New stock price is: ${newPrice}`);
});

ticker.updateStockPrice(200);
