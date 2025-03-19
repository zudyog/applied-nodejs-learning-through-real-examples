const EventEmitter = require('events');

class StockAlert extends EventEmitter {
    constructor(stockName, price) {
        super();
        this.stockName = stockName;
        this.price = price;
    }
    updatePrice(newPrice) {
        if (newPrice !== this.price) {
            this.emit('priceChange', {
                stockName: this.stockName,
                oldPrice: this.price,
                newPrice: newPrice
            });
            this.price = newPrice;
        }
    }
}
// Creating an instance for a specific stock
const appleStock = new StockAlert('Apple', 150);
// Registering for price change events
appleStock.on('priceChange', data => {
    console.log(`Price of ${data.stockName} changed from $${data.oldPrice} to $${data.newPrice}`);
});


// Registering a one-time alert
appleStock.once('priceChange', data => {
    console.log(`First time price change for ${data.stockName} to $${data.newPrice}`);
});


// Simulating price changes
appleStock.updatePrice(155);
appleStock.updatePrice(160);