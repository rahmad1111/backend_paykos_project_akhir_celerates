'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_penghuni: {
        type: Sequelize.INTEGER
      },
      jenis_pembayaran: {
        type: Sequelize.STRING
      },
      batas_waktu: {
        type: Sequelize.STRING
      },
      no_rekening: {
        type: Sequelize.STRING
      },
      tanggal_bayar: {
        type: Sequelize.DATE
      },
      bukti: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pembayarans');
  }
};