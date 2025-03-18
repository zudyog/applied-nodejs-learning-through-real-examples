const express = require('express');

const logger = require('morgan');

const app = express();

// Middleware for logging
app.use(logger(process.env.LOG_LEVEL));
// Stock market API endpoint

app.get('/data', (req, res) => {
    fetch(`${process.env.API_URL}/data`)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(err => console.error(err));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
