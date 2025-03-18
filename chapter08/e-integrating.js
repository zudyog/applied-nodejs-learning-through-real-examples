const express = require('express');
const app = express();

const port = 3000;

// Load your Wasm module
const wasm = require('./rust_wasm/pkg/rust_wasm_bg.wasm');

app.get('/price/:stock_code', (req, res) => {
    const price = wasm.fetch_stock_price(req.params.stock_code);
    res.send(`Price of ${req.params.stock_code}: $${price}`);
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
