const mysql = require('mysql2');
// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// User input
const userId = req.body.userId; // Assume this comes from user input
// Parameterized query
const query = 'SELECT * FROM users WHERE id = ?';
pool.execute(query, [userId], (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});
