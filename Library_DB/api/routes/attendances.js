const express = require('express');
const router = express.Router();
const attendancesController = require('../controllers/attendancesController');

router.get('/', attendancesController.getAllAttendances);
router.post('/', attendancesController.addAttendance);
router.delete('/:eventsDetailID', attendancesController.deleteAttendance);
router.put('/:eventsDetailID', attendancesController.updateAttendance);

module.exports = router;
