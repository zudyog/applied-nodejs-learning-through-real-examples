const fetch = require('node-fetch');

async function getStatus(url) {
    const response = await fetch(url);
    console.log('Status Code:', response.status);
}
getStatus('https://api.github.com');