'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Data_kos', [
      {
        batas_pembayaran: '5 hari',
        jenis_pembayaran: 'BCA',
        no_rekening: '05373899263',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Data_kos', null, {});
  }
};
