const users = require('express').Router();
const userCtrl = require('../controllers/userCtrl')
const {
    tokenVerify
} = require("../middleware/tokenVerify");
const user = require('../models/user');

users.post("/login", userCtrl.login)

users.post("/", userCtrl.createUser)

users.get("/", userCtrl.getUsers)

users.get("/user", tokenVerify, userCtrl.getUser)

users.post("/logout", tokenVerify, userCtrl.logout)

users.put("/change-password", tokenVerify, userCtrl.changePassword)

users.get("/:id", userCtrl.getById)

users.put("/:id", userCtrl.updateById)

users.delete(":id", userCtrl.deleteById)

module.exports = users