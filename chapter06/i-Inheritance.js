class DividendStock extends Stock {
    constructor(name, price, dividendRate) {
        super(name, price);  // calls the parent class's constructor
        this.dividendRate = dividendRate;
    }
    display() {
        super.display();  // calls the display method from Stock class
        console.log(`Dividend Rate: ${this.dividendRate}%`);
    }
}
const microsoft = new DividendStock('Microsoft', 280, 1.2);
microsoft.display();  
// Outputs: Microsoft: $280
//           Dividend Rate: 1.2%