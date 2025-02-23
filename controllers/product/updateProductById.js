const Product = require('../../models/Product');

exports.updateProductById = async (req, res) => {
try {
const product = await Product.findByPk(req.params.productId, {
where: { retailBusinessId: req.params.retailBusinessId },
});
if (!product) {
res.status(404).json({ message: 'Product not found' });
} else {
await product.update(req.body);
res.status(200).json({ message: 'Product updated successfully' });
}
} catch (err) {
res.status(500).json({ message: err.message });
}
};