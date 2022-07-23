"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      dateOfRealisation: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      companyName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      companyAddress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      companyCity: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      companyCountry: {
        allowNull: false,
        type: DataTypes.STRING,
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
      modelName: "Order",
    }
  );
  return Order;
};
