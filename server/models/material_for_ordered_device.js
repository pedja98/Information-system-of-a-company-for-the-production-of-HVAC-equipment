'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material_For_Ordered_Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Material_For_Ordered_Device.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    deviceId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    materialId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    unit: {
      allowNull: false,
      type: DataTypes.STRING
    },
    count: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Material_For_Ordered_Device',
  });
  return Material_For_Ordered_Device;
};