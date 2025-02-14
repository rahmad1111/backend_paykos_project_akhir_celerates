"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pembayaran.init(
    {
      id_penghuni: DataTypes.INTEGER,
      jenis_pembayaran: DataTypes.STRING,
      batas_waktu: DataTypes.STRING,
      no_rekening: DataTypes.STRING,
      tanggal_bayar: DataTypes.DATE,
      bukti: DataTypes.STRING,
      status: DataTypes.STRING,
      id_pemilik: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Pembayaran",
    }
  );
  return Pembayaran;
};
