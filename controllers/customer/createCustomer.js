const Customer = require('../../models/Customer');

exports.createCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address } = req.body;
    const retailBusinessId = req.params.retailBusinessId;

    const customer = await Customer.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      retailBusinessId,
    });

    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};