const { DataTypes } = require("sequelize");
const db = require("../database");

const Kasir = db.define("Kasir", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name_kasir: DataTypes.STRING(80),
    email: {
        type: DataTypes.STRING(255),
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
    },
});

module.exports = Kasir;
