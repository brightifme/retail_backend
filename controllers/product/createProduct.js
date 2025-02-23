const Product = require('../../models/Product');

exports.createProduct = async (req, res) => {
try {
const { name, price, description,quantity,imageUrl } = req.body;
const retailBusinessId = req.params.retailBusinessId;
const product = await Product.create({
name,
price,
description,
quantity,
imageUrl,
retailBusinessId,
});
res.status(201).json(product);
} catch (err) {
res.status(400).json({ message: err.message });
}
};