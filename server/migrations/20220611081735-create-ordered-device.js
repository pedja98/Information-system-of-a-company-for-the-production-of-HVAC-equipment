"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ordered_Devices", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      device: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      width: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      height: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      length: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fans: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      filters: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      mufflers: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      coolers: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      heaters: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      recuperator: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      moisturizer: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Ordered_Devices");
  },
};
