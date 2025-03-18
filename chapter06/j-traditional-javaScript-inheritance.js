function Stock(name, price) {
    this.name = name;
    this.price = price;
}
Stock.prototype.display = function () {
    console.log(`${this.name}: $${this.price}`);
};
var apple = new Stock('Apple', 150);
apple.display();  // Apple: $150



function DividendStock(name, price, dividendRate) {
    Stock.call(this, name, price);
    this.dividendRate = dividendRate;
}
DividendStock.prototype = Object.create(Stock.prototype);

DividendStock.prototype.constructor = DividendStock;

DividendStock.prototype.display = function () {
    Stock.prototype.display.call(this);
    console.log(`Dividend Rate: ${this.dividendRate}%`);
};
var microsoft = new DividendStock('Microsoft', 280, 1.2);
microsoft.display();

// Microsoft: $280
// Dividend Rate: 1.2%