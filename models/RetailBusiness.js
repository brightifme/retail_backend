const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const RetailBusiness = sequelize.define('RetailBusiness', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'retail_businesses',
  timestamps: true,
  freezeTableName: true,
});

module.exports = RetailBusiness;