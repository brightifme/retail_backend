const Order = require('../../models/Order');
const Product = require('../../models/Product');

exports.createOrders = async (req, res) => {
  try {
    const retailBusinessId = req.params.retailBusinessId;
    const { cartItems, customerInfo } = req.body;

    // Fetch product prices from database
    const products = await Product.findAll({
      where: {
        id: cartItems.map(item => item.productId),
      },
    });

    // Create orders with calculated totals
    const createdOrders = await Order.bulkCreate(
      cartItems.map(item => {
        const product = products.find(p => p.id === item.productId);
        return {
          retailBusinessId,
          productId: item.productId,
          orderQuantity: item.orderQuantity,
          total: product.price * item.orderQuantity,
          fullName: customerInfo.fullName,
          houseAddress: customerInfo.houseAddress,
          phoneNumber: customerInfo.phoneNumber,
          email: customerInfo.email,
          status: customerInfo.status,
        };
      }),
    );

    res.status(201).json(createdOrders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
