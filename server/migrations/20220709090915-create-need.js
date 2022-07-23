"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Needs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stockeeperId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "SET NULL",
      },
      count: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      materialId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Materials",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      productionWorkerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Needs");
  },
};
