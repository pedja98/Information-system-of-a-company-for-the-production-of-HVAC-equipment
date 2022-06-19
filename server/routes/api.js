const users = require('./users');
const orders = require('./order');

const api = require('express').Router();

api.use("/users", users)

api.use("/orders", orders)

module.exports = api