const { DataTypes, DATE, ENUM } = require('sequelize');
const db = require('../database');

const Menu = db.define('Menu', {
  id_menu: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  harga: DataTypes.INTEGER(10),
  nama_menu: DataTypes.STRING(60),
});

module.exports = Menu;
