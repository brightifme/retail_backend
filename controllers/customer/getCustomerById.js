const Customer = require('../../models/Customer');

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.customerId, {
      where: { retailBusinessId: req.params.retailBusinessId },
    });

    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.json(customer);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
