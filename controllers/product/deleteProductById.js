const Product = require('../../models/Product');

exports.deleteProductById = async (req, res) => {
try {
const product = await Product.findByPk(req.params.productId, {
where: { retailBusinessId: req.params.retailBusinessId },
});
if (!product) {
res.status(404).json({ message: 'Product not found' });
} else {
await product.destroy();
res.json({ message: 'Product deleted successfully' });
}
} catch (err) {
res.status(500).json({ message: err.message });
}
};