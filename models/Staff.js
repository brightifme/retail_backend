const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const RetailBusiness = require('./RetailBusiness');

const Staff = sequelize.define('Staff', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
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
  tableName: 'staff',
});

Staff.belongsTo(RetailBusiness, { foreignKey: 'retailBusinessId' });

module.exports = Staff;
