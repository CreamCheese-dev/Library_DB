const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

router.get('/', eventsController.getAllEvents);
router.post('/', eventsController.addEvent);
router.delete('/:eventID', eventsController.deleteEvent);
router.put('/:eventID', eventsController.updateEvent);

module.exports = router;
