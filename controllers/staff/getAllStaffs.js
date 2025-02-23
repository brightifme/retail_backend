const Staff = require('../../models/Staff');

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.findAll({
      where: {
        retailBusinessId: req.params.retailBusinessId,
      },
    });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
