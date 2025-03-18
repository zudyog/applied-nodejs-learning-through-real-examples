const helmet = require('helmet');
const express = require('express');

const app = express();

app.use(helmet());
app.get('/', (req, res) => {
    res.send('Hello, your app is secure!');
});
app.listen(3000, () => console.log('Secure app running on port 3000'));