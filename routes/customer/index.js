const express = require('express');
const router = express.Router();

const { createCustomer } = require('../../controllers/customer/createCustomer');
const { deleteCustomerById } = require('../../controllers/customer/deleteCustomerById');
const { getAllCustomers } = require('../../controllers/customer/getAllCustomers');
const { getCustomerById } = require('../../controllers/customer/getCustomerById');
const { updateCustomerById } = require('../../controllers/customer/updateCustomerById');

router.post('/retail-business/:retailBusinessId/customer', createCustomer);
router.delete('/retail-business/:retailBusinessId/customer/:customerId', deleteCustomerById);
router.get('/retail-business/:retailBusinessId/customer', getAllCustomers);
router.get('/retail-business/:retailBusinessId/customer/:customerId', getCustomerById);
router.put('/retail-business/:retailBusinessId/customer/:customerId', updateCustomerById);

module.exports = router;
