'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_kos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_kos.init({
    batas_pembayaran: DataTypes.STRING,
    jenis_pembayaran: DataTypes.STRING,
    no_rekening: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Data_kos',
  });
  return Data_kos;
};