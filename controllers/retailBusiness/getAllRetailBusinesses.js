const RetailBusiness = require('../../models/RetailBusiness');

exports.getAllRetailBusinesses = async (req, res) => {
  try {
    const retailBusinesses = await RetailBusiness.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    res.status(200).json(retailBusinesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
