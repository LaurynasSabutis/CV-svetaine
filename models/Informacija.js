const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Informacija = sequelize.define('Informacija', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    pavadinimas: { type: DataTypes.STRING, allowNull: false },
    reiksme: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Informacija;
