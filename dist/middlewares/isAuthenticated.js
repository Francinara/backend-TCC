"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT secret is not defined");
    }
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user_id = sub;
        next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
