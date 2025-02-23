const Customer = require('../../models/Customer');

exports.updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.customerId, {
      where: { retailBusinessId: req.params.retailBusinessId },
    });

    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      await customer.update(req.body);
      res.status(200).json({ message: 'Customer updated successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};