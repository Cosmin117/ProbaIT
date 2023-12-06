const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    let accessToken = req.cookie.jwt;

    if (!accessToken) {
        return res.status(400).json({ error: "Unauthorized"})
    }

    let payload;

    try {
        payload = jet.verify(accessToken, process.env.JWT_SECRET);
        req._id = payload._id;
        next();
    } catch (e) {
        return res.status(403).json({ error: "Unauthorized"})
    }
}