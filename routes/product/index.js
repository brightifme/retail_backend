const express = require('express');
const router = express.Router();
const { createProduct } = require('../../controllers/product/createProduct');
const { deleteProductById } = require('../../controllers/product/deleteProductById');
const { getAllProducts } = require('../../controllers/product/getAllProducts');
const { getProductById } = require('../../controllers/product/getProductById');
const { updateProductById } = require('../../controllers/product/updateProductById');

router.post('/retail-business/:retailBusinessId/product', createProduct);
router.delete('/retail-business/:retailBusinessId/product/:productId', deleteProductById);
router.get('/retail-business/:retailBusinessId/product', getAllProducts);
router.get('/retail-business/:retailBusinessId/product/:productId', getProductById);
router.put('/retail-business/:retailBusinessId/product/:productId', updateProductById);

module.exports = router;