// Modified based on Express documentation starter code
// Source: https://expressjs.com/en/4x/api.html#router

const express = require('express');
const router = express.Router();
const bt_detailsController = require('../controllers/bt_detailsController');

router.use('/', bt_detailsController.getAllTransactionDetails);
module.exports = router;
