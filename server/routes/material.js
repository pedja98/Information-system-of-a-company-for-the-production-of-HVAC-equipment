const material = require('express').Router();
const materialCtrl = require('../controllers/materialCtrl') 
const {
    tokenVerify
} = require("../middleware/tokenVerify");

material.get('/', tokenVerify, materialCtrl.getMaterials)

material.post('/', tokenVerify, materialCtrl.createMaterial)

material.put('/:id', tokenVerify, materialCtrl.updateMaterialStock)

module.exports = material