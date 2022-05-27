const users = require('./users');

const api = require('express').Router();

api.use("/users", users)

module.exports = api