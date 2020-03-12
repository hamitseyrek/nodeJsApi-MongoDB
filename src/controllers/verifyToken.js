const jwt = require('jsonwebtoken');
const config = require('../config');

async function verifyToken(preq, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).send({ auth: false, message: "Anahtar doğrulanmadı" });
    }
    const decoded = await jwt.verify(token, config.secret);
    req.userId = decoded.id;

    next();
}

module.exports = verifyToken;