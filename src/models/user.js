'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    harga_kamar: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_telepon: DataTypes.STRING,
    roles: DataTypes.STRING,
    nomer_kamar: DataTypes.INTEGER,
    periode_pembayaran: DataTypes.STRING,
    nomer_pengguna: DataTypes.STRING,
    password: DataTypes.STRING,
    id_pemilik: DataTypes.INTEGER,
    refresh_token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};