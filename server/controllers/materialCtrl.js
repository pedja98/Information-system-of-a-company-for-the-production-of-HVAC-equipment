const { Material, Stock, Need, User, Purchase } = require("../models/index");

const getMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll({
      attributes: [
        "id",
        "name",
        "itemNumber",
        "supplierCode",
        "supplierItemNumber",
        "unit",
      ],
      include: [
        {
          model: Stock,
          as: "stock",
          attributes: ["count", "capacity"],
          required: true,
        },
      ],
    });
    res.json(materials);
  } catch (err) {
    res.json(err);
  }
};

const createMaterial = async (req, res) => {
  try {
    Material.create(
      {
        name: req.body.name,
        itemNumber: req.body.itemNumber,
        supplierCode: req.body.supplierCode,
        supplierItemNumber: req.body.supplierItemNumber,
        unit: req.body.unit,
        stock: {
          capacity: req.body.capacity,
        },
      },
      {
        include: ["stock"],
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    res.json(err);
  }
};

const updateMaterialStock = async (req, res) => {
  try {
    const result = await Stock.update(
      {
        count: req.body.count,
      },
      {
        where: { id: req.params.id },
      }
    );

    const user = await User.findOne({
      attributes: ["id"],
      where: {
        email: req.email,
      },
    });

    Need.create({
      stockeeperId: user.id,
      status: "SENT",
      count: req.body.value,
      materialId: req.params.id,
    });

    res.json({
      success: result[0],
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const needCount = await Need.count({
      where: {
        materialId: req.params.id,
        status: "SENT",
      },
    });
    if (needCount > 0) {
      res.json({
        success: false,
        msg: "need exist",
      });
      return;
    }
    const purchaseCnt = await Purchase.count({
      where: {
        status: "REQUEST_SENT",
        materialId: req.body.materialId,
      },
    });
    if (purchaseCnt > 0) {
      res.json({
        success: false,
        msg: "purchase exist",
      });
      return;
    }
    const material = await Material.findByPk(req.params.id);
    material.destroy();
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    res.json(err);
  }
};

module.exports = {
  getMaterials,
  createMaterial,
  updateMaterialStock,
  deleteById,
};
