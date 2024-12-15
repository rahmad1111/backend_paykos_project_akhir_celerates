'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      harga_kamar: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      no_telepon: {
        type: Sequelize.STRING
      },
      roles: {
        type: Sequelize.STRING
      },
      nomer_kamar: {
        type: Sequelize.INTEGER
      },
      periode_pembayaran: {
        type: Sequelize.STRING
      },
      nomer_penguna: {
        type: Sequelize.STRING
      },
      password: {
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
    await queryInterface.dropTable('U sers');
  }
};