class Stock {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`${this.name}: $${this.price}`);
    }
}
const apple = new Stock('Apple', 150);
apple.display();  // Outputs: Apple: $150