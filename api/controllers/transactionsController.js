const db = require('../helpers/database/db-connector');

// Helper function to execute database queries with promise support
const executeQuery = async (query, params = []) => {
    try {
        const [results] = await db.pool.query(query, params);
        return results;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.getAllTransactions = async (req, res) => {
    try {
        const results = await executeQuery('SELECT * FROM Book_Transactions');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addTransaction = async (req, res) => {
    const { patronID, numberBooks, staffID, date } = req.body;
    try {
        const result = await executeQuery(
            'INSERT INTO Book_Transactions (patronID, numberBooks, staffID, date) VALUES (?, ?, ?, ?)',
            [patronID, numberBooks, staffID, date]
        );
        res.json({ message: "Transaction added successfully!", transactionID: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    const { transactionID } = req.params;
    try {
        const result = await executeQuery('DELETE FROM Book_Transactions WHERE transactionID = ?', [transactionID]);
        if (result.affectedRows) {
            res.json({ message: "Transaction deleted successfully!" });
        } else {
            res.status(404).json({ message: "Transaction not found!" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTransaction = async (req, res) => {
    const { transactionID } = req.params;
    const { patronID, numberBooks, staffID, date } = req.body;
    try {
        const result = await executeQuery(
            `UPDATE Book_Transactions SET patronID = ?, numberBooks = ?, staffID = ?, date = ? WHERE transactionID = ?`,
            [patronID, numberBooks, staffID, date, transactionID]
        );
        if (result.affectedRows) {
            res.json({ message: "Transaction updated successfully!" });
        } else {
            res.status(404).json({ message: "Transaction not found!" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
