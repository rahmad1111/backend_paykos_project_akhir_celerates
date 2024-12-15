'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Informasis', [
      {
        informasi: 'loren ipsum dolor sit amet, consectetur adipiscing el aspect, sed do eiusmod tempor incididunt ut labore et',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Informasis', null, {});
  }
};
