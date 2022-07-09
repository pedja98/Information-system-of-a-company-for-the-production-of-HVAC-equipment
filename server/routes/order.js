const orders = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl') 
const {
    tokenVerify
} = require("../middleware/tokenVerify");

orders.post("/", tokenVerify, orderCtrl.createOrder)

orders.get("/", tokenVerify, orderCtrl.getOrders)

orders.get("/:id", tokenVerify, orderCtrl.getOrder)

module.exports = orders