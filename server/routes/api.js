const users = require("./users");
const orders = require("./order");
const material = require("./material");
const need = require("./need");
const purchase = require("./purchase");

const api = require("express").Router();

api.use("/users", users);
api.use("/orders", orders);
api.use("/materials", material);
api.use("/needs", need);
api.use("/purchases", purchase);

module.exports = api;
