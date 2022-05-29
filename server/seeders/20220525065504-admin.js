'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {

    const hashPassword = await bcrypt.hash('Aa@445566', parseInt(process.env.SALT));
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Dragan',
      lastName: 'Nikolic',
      type: 'admin',
      password: hashPassword,
      email: 'dragan@eagle.ing',
      dateOfBirth: new Date('1985-12-17'),
      pic: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};