const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    // Save the username and hashed password to the database (pseudo-code)
    const user = { username, password: hashedPassword };
    // database.save(user);
    res.status(201).send('User registered');
});

// User Authentication and Token Issuance
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Retrieve user from the database (pseudo-code)
    const user = { username, password: 'hashedPasswordFromDB' };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).send('Authentication failed');
    }
    const token = jwt.sign({ userId: user.username }, 'secretKey', { expiresIn: '1h' });
    res.send({ token });
});

// Implementing Authorization
const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, 'secretKey');
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

app.get('/stocks', authenticate, (req, res) => {
    // Only authenticated users can view this
    res.send('Stock data');
});


app.listen(3000, () => console.log('Server running on port 3000'));