const orders = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl') 
const {
    tokenVerify
} = require("../middleware/tokenVerify");

orders.post("/", tokenVerify, orderCtrl.createOrder)

orders.get("/work-order", tokenVerify, orderCtrl.getWorkOrders)

orders.get("/work-order/:id", tokenVerify, orderCtrl.getWorkOrder)

module.exports = orders