const { User, Material, Purchase, Stock } = require("../models/index");

const getPurchases = async (req, res) => {
  try {
    const purchase = await Purchase.findAll({
      attributes: ["id", "amount", "status", "createdAt", "updatedAt"],
      include: [
        {
          model: Material,
          as: "material",
          required: true,
          attributes: ["itemNumber", "supplierCode", "unit"],
        },
        {
          model: User,
          as: "stockkeeper",
          attributes: ["firstName", "lastName"],
        },
        {
          model: User,
          as: "head_of_procurement",
          attributes: ["firstName", "lastName"],
        },
      ],
      order: [
        ["status", "DESC"],
        ["createdAt", "ASC"],
      ],
    });
    res.json(purchase);
  } catch (err) {
    res.json({
      err: err,
    });
  }
};

const createPurchase = async (req, res) => {
  try {
    const purchaseCnt = await Purchase.count({
      where: {
        status: "REQUEST_SENT",
        materialId: req.body.materialId,
      },
    });
    console.log(purchaseCnt);
    if (purchaseCnt) {
      res.json({ success: false });
      return;
    }
    const user = await User.findOne({
      attributes: ["id"],
      where: {
        email: req.email,
      },
    });
    Purchase.create({
      materialId: req.body.materialId,
      amount: req.body.amount,
      status: "REQUEST_SENT",
      headOfProcurementId: user.id,
    });
    res.json({ success: true });
  } catch (err) {
    res.json({
      err: err,
    });
  }
};

const changePurchasesStatus = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ["id"],
      where: {
        email: req.email,
      },
    });
    let purchase = await Purchase.findByPk(req.params.id);
    purchase.status = "MATERIAL_TAKEN";
    purchase.stockkeeperId = user.id;
    purchase.save();
    console.log(purchase.materialId);
    let stock = await Stock.findByPk(purchase.materialId);
    stock.count += purchase.amount;
    stock.save();
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.json({
      err: err,
    });
  }
};

module.exports = {
  getPurchases,
  createPurchase,
  changePurchasesStatus,
};
