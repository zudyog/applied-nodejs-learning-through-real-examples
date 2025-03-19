const EventEmitter = require('events');
class StockAlert extends EventEmitter {
    constructor(stock, targetPrice) {
        super();
        this.stock = stock;
        this.targetPrice = targetPrice;
    }
    updatePrice(newPrice) {
        console.log(`The new price of ${this.stock} is ${newPrice}`);
        if (newPrice >= this.targetPrice) {
            this.emit('targetReached', {
                stock: this.stock,
                price: newPrice,
            });
        }
    }
}
// Usage
const appleStock = new StockAlert('AAPL', 150);
appleStock.on('targetReached', (data) => {
    console.log(`Target price reached for ${data.stock}: $${data.price}`);
});
appleStock.updatePrice(140);
appleStock.updatePrice(150);