const alertListener = (stock) => {
    console.log(`Alert: ${stock.name} is above $100!`);
};

stockEmitter.on('priceUpdate', alertListener);

// Later on, to remove the listener:
stockEmitter.removeListener('priceUpdate', alertListener);
