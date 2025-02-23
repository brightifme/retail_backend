const Staff = require('../../models/Staff');

exports.updateStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.staffId, {
      where: {
        retailBusinessId: req.params.retailBusinessId,
      },
    });

    if (!staff) {
      res.status(404).json({ message: 'Staff member not found' });
    } else {
      await staff.update(req.body);
      res.status(200).json({ message: 'Staff member updated successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
