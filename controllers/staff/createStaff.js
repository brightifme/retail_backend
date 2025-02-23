const Staff = require('../../models/Staff');

exports.createStaff = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    const retailBusinessId = req.params.retailBusinessId;

    const staff = await Staff.create({
      name,
      email,
      password,
      gender,
      retailBusinessId,
    });

    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};