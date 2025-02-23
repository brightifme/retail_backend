const Customer = require('../../models/Customer');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      where: { retailBusinessId: req.params.retailBusinessId },
    });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
