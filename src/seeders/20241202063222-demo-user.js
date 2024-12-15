'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        harga_kamar: 'Rp 600.000',
        nama: 'Penghuni',
        no_telepon: '080900002000',
        roles: 'penghuni',
        nomer_kamar: null,
        periode_pembayaran: '-',
        nomer_pengguna: "0034",
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
