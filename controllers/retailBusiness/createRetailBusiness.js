const RetailBusiness = require('../../models/RetailBusiness');
const bcrypt = require('bcryptjs');

exports.createRetailBusiness = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address, description } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const retailBusiness = await RetailBusiness.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      description,
    });

    res.status(201).json({
      message: 'Retail Business has been created successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
