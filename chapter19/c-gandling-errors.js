stockEmitter.on('priceUpdate', (stock) => {
    try {
        // Potentially faulty logic here
        updateDatabase(stock);
    } catch (error) {
        console.error('Failed to update database:', error);
    }
});
