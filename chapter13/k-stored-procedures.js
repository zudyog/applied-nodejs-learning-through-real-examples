
// --SQL Stored Procedure
// CREATE PROCEDURE GetUserById(IN userId INT)
// BEGIN
// SELECT * FROM users WHERE id = userId;
// END;


// Node.js code to call the stored procedure
const userId = req.body.userId; // Assume this comes from user input
const query = 'CALL GetUserById(?)';
pool.execute(query, [userId], (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});
