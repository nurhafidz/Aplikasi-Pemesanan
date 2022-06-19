const { DataTypes, DATE, ENUM } = require('sequelize');
const db = require('../database');

const Kasir = db.define('Kasir', {
  id_kasir: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_menu: DataTypes.STRING(60),
  email: DataTypes.STRING(60),
  password: DataTypes.STRING(60),
});

module.exports = Kasir;
