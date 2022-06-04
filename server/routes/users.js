const users = require('express').Router();
const userCtrl = require('../controllers/userCtrl')
const upload = require('../multer/multer')
const {
    tokenVerify
} = require("../middleware/tokenVerify");

users.post("/login", userCtrl.login)

users.post("/", tokenVerify, userCtrl.createUser)

users.get("/", userCtrl.getUsers)

users.get("/user", tokenVerify, userCtrl.getUser)

users.post("/logout", tokenVerify, userCtrl.logout)

users.put("/change-password", tokenVerify, userCtrl.changePassword)

users.put("/", tokenVerify, userCtrl.updateMyProfile)

users.put("/change-pic", upload.single('file'), tokenVerify, userCtrl.changePicture)

users.get("/:id", userCtrl.getById)

users.put("/:id", userCtrl.updateById)

users.delete(":id", userCtrl.deleteById)

module.exports = users