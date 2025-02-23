const express = require('express');
const router = express.Router();
const {createRetailBusiness} = require('../../controllers/retailBusiness/createRetailBusiness.js');
const {getAllRetailBusinesses} = require('../../controllers/retailBusiness/getAllRetailBusinesses.js');
const {
getRetailBusinessById
} = require('../../controllers/retailBusiness/getRetailBusinessById.js');
const {
updateRetailBusinessById
} = require('../../controllers/retailBusiness/updateRetailBusinessById.js');
const {
deleteRetailBusiness
} = require('../../controllers/retailBusiness/deleteRetailBusiness.js');

router.post('/', createRetailBusiness);
router.get('/', getAllRetailBusinesses);
router.get('/:id', getRetailBusinessById);
router.put('/:id', updateRetailBusinessById);
router.delete('/:id', deleteRetailBusiness);

module.exports = router;