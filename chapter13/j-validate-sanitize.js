const validator = require('validator');
// User input
const userEmail = req.body.email; // Assume this comes from user input
// Validate email
if (!validator.isEmail(userEmail)) {
    return res.status(400).send('Invalid email address');
}
// Sanitize input
const sanitizedEmail = validator.normalizeEmail(userEmail);
// Use sanitized input in your query
