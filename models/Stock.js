const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Stock = sequelize.define('Stock', {
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Stock;
