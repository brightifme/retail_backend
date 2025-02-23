const Order = require('../../models/Order');

exports.updateOrderById = async (req, res) => {
try {
const order = await Order.findByPk(req.params.orderId, {
where: { retailBusinessId: req.params.retailBusinessId },
});
if (!order) {
res.status(404).json({ message: 'Order not found' });
} else {
await order.update(req.body);
res.status(200).json({ message: 'Order updated successfully' });
}
} catch (err) {
res.status(500).json({ message: err.message });
}
};