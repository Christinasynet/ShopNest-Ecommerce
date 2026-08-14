
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const Protect = async (req, res, next) => {
    try {
        console.log("AUTH HEADER:", req.headers.authorization);

        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];

            console.log("TOKEN:", token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log("DECODED:", decoded);

            req.user = await User.findById(decoded.id).select('-password');

            console.log("USER FOUND:", req.user);

            next();
        } else {
            res.status(401).json({
                message: 'Not authorized, no token',
            });
        }
    } catch (error) {
        console.log("AUTH ERROR:", error);
        res.status(401).json({
            message: 'Not authorized, token failed',
        });
    }
};

module.exports = { Protect };