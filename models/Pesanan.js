const { DataTypes, DATE, ENUM } = require('sequelize');
const db = require('../database');

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
        key: 'id_kasir'
    }
  },
  waktu_pemesanan: DataTypes.DATE,
  harga: DataTypes.INTEGER(10),
  nomor_meja: DataTypes.INTEGER(3),
  qty: DataTypes.INTEGER(3),
  status: DataTypes.ENUM('Belum bayar', 'Dibayar', 'Selesai')
});

module.exports = Pesanan;
