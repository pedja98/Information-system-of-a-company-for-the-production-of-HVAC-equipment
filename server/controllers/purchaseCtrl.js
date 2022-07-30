const { User, Material, Purchase } = require("../models/index");

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
    const purchase = await Purchase.update(
      {
        status: "MATERIAL_TAKEN",
        stockkeeperId: user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({
      success: purchase[0],
    });
  } catch (err) {
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
