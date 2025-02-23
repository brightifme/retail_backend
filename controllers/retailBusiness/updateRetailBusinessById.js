const RetailBusiness = require('../../models/RetailBusiness');
const bcrypt = require('bcryptjs');

exports.updateRetailBusinessById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password, description, address, phoneNumber } = req.body;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.password = hashedPassword;
    }

    const retailBusiness = await RetailBusiness.update({ name, email, password, description, address, phoneNumber }, { where: { id } });

    res.status(200).json({ message: 'Retail Business updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};