const purchase = require("express").Router();
const purchaseCtrl = require("../controllers/purchaseCtrl");
const { tokenVerify } = require("../middleware/tokenVerify");

purchase.get("/", tokenVerify, purchaseCtrl.getPurchases);
purchase.post("/", tokenVerify, purchaseCtrl.createPurchase);
purchase.put("/:id", tokenVerify, purchaseCtrl.changePurchasesStatus);

module.exports = purchase;
