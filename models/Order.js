const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const Product = require('./Product');
const RetailBusiness = require('./RetailBusiness'); // Import RetailBusiness model

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  retailBusinessId: {
    type: DataTypes.UUID,
    references: {
      model: RetailBusiness, // Reference RetailBusiness model
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.UUID,
    references: {
      model: Product,
      key: 'id',
    },
  },
  orderQuantity: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
  houseAddress: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
  status: {
    type: DataTypes.ENUM('cancelled', 'pending', 'success'),
    allowNull: true, // Optional field
    defaultValue: 'pending', // Default value
  },
}, {
  timestamps: true,
  freezeTableName: true,
  tableName: 'order',
});

Order.belongsTo(RetailBusiness, { foreignKey: 'retailBusinessId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

Order.prototype.getProductDetails = async function() {
  const product = await this.getProduct();
  return {
    productName: product.name,
    productPrice: product.price,
  };
};

module.exports = Order;
