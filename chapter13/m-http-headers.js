const express = require("express");
const helmet = require("helmet");


const app = express();


// Apply security headers using helmet
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                objectSrc: ["'none'"],
            },
        },
        referrerPolicy: { policy: "strict-origin" },
        xssFilter: true,
        noSniff: true,
    })
);


// Sample stock market API endpoint
app.get("/api/stock/:symbol", (req, res) => {
    const { symbol } = req.params;
    res.json({ symbol, price: Math.random() * 1000 });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
