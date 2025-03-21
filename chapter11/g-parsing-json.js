async function fetchStockData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
