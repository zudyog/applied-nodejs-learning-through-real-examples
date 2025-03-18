const express = require('express');
const app = express();

app.get('/api/stocks', (req, res) => {
    let userQuery = req.query.stockSymbol; // Assume user inputs "AAPL"
    let sql = `SELECT * FROM stocks WHERE symbol = '${userQuery}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
