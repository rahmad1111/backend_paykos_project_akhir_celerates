'use strict';
const {
  Model
} = require('sequelize');
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
  Pembayaran.init({
    id_penghuni: DataTypes.INTEGER,
    id_data_kos: DataTypes.INTEGER,
    harga: DataTypes.STRING,
    jenis_pembayaran: DataTypes.STRING,
    batas_waktu: DataTypes.STRING,
    no_rekening: DataTypes.STRING,
    periode_pembayaran: DataTypes.STRING,
    jumlah_pembayaran: DataTypes.STRING,
    tanggal_bayar: DataTypes.DATE,
    bukti: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pembayaran',
  });
  return Pembayaran;
};