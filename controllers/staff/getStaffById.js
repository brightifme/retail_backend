const Staff = require('../../models/Staff');

exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.staffId, {
      where: {
        retailBusinessId: req.params.retailBusinessId,
      },
    });

    if (!staff) {
      res.status(404).json({ message: 'Staff member not found' });
    } else {
      res.json(staff);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};