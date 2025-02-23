const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const RetailBusiness = require('./RetailBusiness');

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  retailBusinessId: {
    type: DataTypes.UUID,
    references: {
      model: RetailBusiness,
      key: 'id',
    },
  },
}, {
  timestamps: true,
  freezeTableName: true,
  tableName: 'customer',
});

Customer.belongsTo(RetailBusiness, { foreignKey: 'retailBusinessId' });

module.exports = Customer;
