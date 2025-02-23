const RetailBusiness = require('../../models/RetailBusiness');

exports.getRetailBusinessById = async (req, res) => {
  try {
    const id = req.params.id;
    const retailBusiness = await RetailBusiness.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });

    if (!retailBusiness) {
      res.status(404).json({ message: 'Retail Business not found' });
    } else {
      res.status(200).json(retailBusiness);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};