const orders = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl') 
const {
    tokenVerify
} = require("../middleware/tokenVerify");

orders.post("/", tokenVerify, orderCtrl.createOrder)

module.exports = orders