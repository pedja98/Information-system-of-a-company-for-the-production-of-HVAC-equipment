const users = require('./users');
const orders = require('./order');
const material = require('./material')

const api = require('express').Router();

api.use("/users", users)

api.use("/orders", orders)

api.use("/materials", material)

module.exports = api