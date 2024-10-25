const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Account = sequelize.define('Account', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Account;
