async function fetchStockData(url) {
    const response = await fetch(url, { redirect: 'manual' });
    if (response.status === 302) {
        console.log('Redirected:', response.headers.get('Location'));
    } else {
        const data = await response.json();
        console.log(data);
    }
}
