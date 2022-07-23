const users = require("./users");
const orders = require("./order");
const material = require("./material");
const need = require("./need");

const api = require("express").Router();

api.use("/users", users);

api.use("/orders", orders);

api.use("/materials", material);

api.use("/needs", need);

module.exports = api;
