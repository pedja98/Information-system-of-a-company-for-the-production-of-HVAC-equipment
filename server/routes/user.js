const user = require('express').Router();
const userCtrl = require('../controllers/userCtrl')

user.post("/login", userCtrl.login)

user.post("/", userCtrl.createUser)

user.get("/", userCtrl.getUsers)

user.get("/:id", userCtrl.getById)

user.put("/:id", userCtrl.updateById)

user.delete(":id", userCtrl.deleteById)

module.exports = user