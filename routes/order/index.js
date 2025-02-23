const express = require('express');
const router = express.Router();
const { createOrders } = require('../../controllers/order/createOrders');
const { deleteOrderById } = require('../../controllers/order/deleteOrderById');
const { getAllOrders } = require('../../controllers/order/getAllOrders');
const { getOrderById } = require('../../controllers/order/getOrderById');
const { updateOrderById } = require('../../controllers/order/updateOrderById');

router.post('/retail-business/:retailBusinessId/orders', createOrders);
router.delete('/retail-business/:retailBusinessId/orders/:orderId', deleteOrderById);
router.get('/retail-business/:retailBusinessId/orders', getAllOrders);
router.get('/retail-business/:retailBusinessId/orders/:orderId', getOrderById);
router.put('/retail-business/:retailBusinessId/orders/:orderId', updateOrderById);

module.exports = router;