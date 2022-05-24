'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Work_Order.init({
    workOrderId: DataTypes.INTEGER,
    deviceId: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Work_Order',
  });
  return Work_Order;
};