'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material_For_Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Material_For_Device.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    deviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Devices',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    materialId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Materials',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    count: {
      type: DataTypes.INTEGER
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
    modelName: 'Material_For_Device',
  });
  return Material_For_Device;
};