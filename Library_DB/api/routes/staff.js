const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
router.get('/', staffController.getAllStaff);
router.post('/', staffController.addStaff);
router.delete('/:staffId', staffController.deleteStaff);
router.put('/:staffId', staffController.updateStaff);

module.exports = router;
