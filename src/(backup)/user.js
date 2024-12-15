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
    nomer_kamar: DataTypes.STRING,
    periode_pembayaran: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};