const users = require('express').Router();
const userCtrl = require('../controllers/userCtrl')
const { tokenVerify } = require("../middleware/tokenVerify")

users.post("/login", userCtrl.login)

users.post("/", userCtrl.createUser)

users.get("/", userCtrl.getUsers)

users.get("/:id", userCtrl.getById)

users.put("/:id", userCtrl.updateById)

users.delete(":id", userCtrl.deleteById)

users.get("/user", tokenVerify ,userCtrl.getUser)

module.exports = users