'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Keluhan_kos', [
      {
        judul_keluhan: 'Air Off',
        isi_keluhan: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Keluhan_kos', null, {});
  }
};
