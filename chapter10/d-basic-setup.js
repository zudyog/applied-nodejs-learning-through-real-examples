const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.get('/stocks', async (req, res) => {
    const response = await fetch('https://api.example.com/stocks');
    const data = await response.json();
    // Imagine some complex calculations here
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
