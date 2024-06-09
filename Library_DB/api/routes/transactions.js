const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router.get('/', transactionsController.getAllTransactions);
router.post('/', transactionsController.addTransaction);
router.delete('/:transactionID', transactionsController.deleteTransaction);
router.put('/:transactionID', transactionsController.updateTransaction);

module.exports = router;
