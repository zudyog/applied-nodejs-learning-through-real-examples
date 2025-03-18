const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
};
