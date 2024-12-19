"use strict";
const passwordUtil = require("../utils/password");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        harga_kamar: "",
        nama: "admin",
        no_telepon: "",
        roles: "admin",
        nomer_kamar: null,
        periode_pembayaran: "",
        nomer_pengguna: "804025",
        password: await passwordUtil.encrypt("12345"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_kamar: "Rp.300.000",
        nama: "Akbar",
        no_telepon: "080808080808",
        roles: "penghuni",
        nomer_kamar: 1,
        periode_pembayaran: "",
        nomer_pengguna: "804026",
        id_pemilik: 1,
        password: await passwordUtil.encrypt("12345"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
