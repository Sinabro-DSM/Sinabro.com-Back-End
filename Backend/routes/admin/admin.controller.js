const jwt = require('jsonwebtoken');
const config = require('../../config');

const login = (req, res, next) => {
    const { id, password } = req.body;

    const secret = req.app.get('jwt-secret');

    if (id === config.adminId && password === config.adminPassword) {
        const token = jwt.sign({
            id,
            password,
        }, secret, {
            expiresIn: '12h',
        });
        res.status(200).json({
            message: 'successful login',
            token
        })
    } else {
        res.status(403).json({
            message: 'failed login'
        });
    }
}

module.exports = {
    login
}