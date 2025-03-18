const userId = req.body.userId; // Assume this comes from user input
const query = `SELECT * FROM users WHERE id = ${pool.escape(userId)}`;
pool.query(query, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});
