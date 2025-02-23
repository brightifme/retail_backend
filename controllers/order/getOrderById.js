const Order = require('../../models/Order');

exports.getOrderById = async (req, res) => {
try {
const order = await Order.findByPk(req.params.orderId, {
where: { retailBusinessId: req.params.retailBusinessId },
});
if (!order) {
res.status(404).json({ message: 'Order not found' });
} else {
res.json(order);
}
} catch (err) {
res.status(500).json({ message: err.message });
}
};