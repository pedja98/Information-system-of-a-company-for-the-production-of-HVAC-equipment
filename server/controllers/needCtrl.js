const { Need, Material, User } = require("../models/index");

const getNeeds = async (req, res) => {
  try {
    const needs = await Need.findAll({
      attributes: ["id", "count", "status", "createdAt", "updatedAt"],
      include: [
        {
          model: Material,
          as: "material",
          required: true,
          attributes: ["name", "unit", "itemNumber"],
        },
        {
          model: User,
          as: "stockkeeper",
          attributes: ["firstName", "lastName"],
        },
        {
          model: User,
          as: "worker",
          attributes: ["firstName", "lastName"],
        },
      ],
      order: [
        ["createdAt", "asc"],
        ["updatedAt", "asc"],
      ],
    });
    res.json(needs);
  } catch (err) {
    res.json({
      err: err,
    });
  }
};

const receiveMaterials = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ["id"],
      where: {
        email: req.email,
      },
    });
    const need = await Need.update(
      {
        status: "RECEIVED",
        productionWorkerId: user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({
      success: need[0],
    });
  } catch (err) {
    res.json({
      err: err,
    });
  }
};

module.exports = {
  getNeeds,
  receiveMaterials,
};
