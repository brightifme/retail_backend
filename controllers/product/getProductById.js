const Product = require('../../models/Product');

exports.getProductById = async (req, res) => {
try {
const product = await Product.findByPk(req.params.productId, {
where: { retailBusinessId: req.params.retailBusinessId },
});
if (!product) {
res.status(404).json({ message: 'Product not found' });
} else {
res.json(product);
}
} catch (err) {
res.status(500).json({ message: err.message });
}
};