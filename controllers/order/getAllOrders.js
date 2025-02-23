const Order = require('../../models/Order');

exports.getAllOrders = async (req, res) => {
try {
const orders = await Order.findAll({
where: { retailBusinessId: req.params.retailBusinessId },
});
res.json(orders);
} catch (err) {
res.status(500).json({ message: err.message });
}
};