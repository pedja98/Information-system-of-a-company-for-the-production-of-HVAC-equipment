'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'Dragan',
      lastName: 'Nikolic',
      type: 'admin',
      password: 'Aa@445566',
      email: 'dragan@eagle.ing',
      date_of_birth: new Date('1985-12-17'),
      pic:null,
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