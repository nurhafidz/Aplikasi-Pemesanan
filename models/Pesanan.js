const { DataTypes, DATE, ENUM, Sequelize } = require('sequelize');
const db = require('../database');
const Menu = require('../models/Menu');
const Kasir = require('../models/Kasir');

const Pesanan = db.define('Pesanan', {
  id_pesanan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_menu: {
    type: DataTypes.INTEGER,
    references: {
        model: Menu,
        key: 'id_menu'
    }
  },
  id_kasir: {
    type: DataTypes.INTEGER,
    references: {
        model: Kasir,
        key: 'id'
    }
  },
  waktu_pemesanan: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  harga: DataTypes.INTEGER(10),
  nomor_meja: DataTypes.INTEGER(3),
  qty: DataTypes.INTEGER(3),
  status: DataTypes.ENUM('Belum bayar', 'Dibayar', 'Selesai')
});

module.exports = Pesanan;
