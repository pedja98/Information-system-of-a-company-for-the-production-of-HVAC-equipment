"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Need extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Need.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      stockeeperId: {
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      materialId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      productionWorkerId: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Need",
    }
  );
  return Need;
};
