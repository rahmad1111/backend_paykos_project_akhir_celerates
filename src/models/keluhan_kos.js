'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keluhan_kos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Keluhan_kos.init({
    judul_keluhan: DataTypes.STRING,
    isi_keluhan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Keluhan_kos',
  });
  return Keluhan_kos;
};