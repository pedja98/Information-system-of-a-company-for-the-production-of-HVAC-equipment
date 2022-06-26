'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordered_Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ordered_Device.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    device: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING
    },
    width: {
      allowNull: true,
      type: DataTypes.STRING
    },
    height: {
      allowNull: true,
      type: DataTypes.STRING
    },
    length: {
      allowNull: true,
      type: DataTypes.STRING
    },
    fans: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    mufflers: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    filters: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    coolers: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    heaters: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    recuperator: {
      allowNull: true,
      type: DataTypes.STRING
    },
    moisturizer: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Ordered_Device',
  });
  return Ordered_Device;
};