const RetailBusiness = require('../../models/RetailBusiness');

exports.deleteRetailBusiness = async (req, res) => {
  try {
    const id = req.params.id;
    await RetailBusiness.destroy({ where: { id } });
    res.status(200).json({ message: 'Retail Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};