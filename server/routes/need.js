const need = require('express').Router();
const needCtrl = require('../controllers/needCtrl')
const {
    tokenVerify
} = require("../middleware/tokenVerify");

need.get('/', needCtrl.getNeeds)

need.put('/:id', tokenVerify, needCtrl.receiveMaterials)

module.exports = need