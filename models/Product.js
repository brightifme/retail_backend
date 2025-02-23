const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const RetailBusiness = require('./RetailBusiness');

const Product = sequelize.define('Product', {
id: {
type: DataTypes.UUID,
primaryKey: true,
defaultValue: DataTypes.UUIDV4,
},
name: {
type: DataTypes.STRING,
},
price: {
type: DataTypes.DECIMAL(10, 2),
},
quantity: {
type: DataTypes.INTEGER,
},
imageUrl: {
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
tableName: 'product',
});

Product.belongsTo(RetailBusiness, { foreignKey: 'retailBusinessId' });

module.exports = Product;