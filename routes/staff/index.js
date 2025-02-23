const express = require('express');
const router = express.Router();
const { createStaff } = require('../../controllers/staff/createStaff');
const { deleteStaffById } = require('../../controllers/staff/deleteStaffById');
const { getAllStaff } = require('../../controllers/staff/getAllStaffs');
const { getStaffById } = require('../../controllers/staff/getStaffById');
const { updateStaffById } = require('../../controllers/staff/updateStaffById');

router.post('/retail-business/:retailBusinessId/staff', createStaff);
router.delete('/retail-business/:retailBusinessId/staff/:staffId', deleteStaffById);
router.get('/retail-business/:retailBusinessId/staff', getAllStaff);
router.get('/retail-business/:retailBusinessId/staff/:staffId', getStaffById);
router.put('/retail-business/:retailBusinessId/staff/:staffId', updateStaffById);

module.exports = router;

