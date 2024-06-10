const db = require('../helpers/database/db-connector');

// Local helper function to execute database queries with promise support
const executeQuery = async (query, params = []) => {
    try {
        const [results] = await db.pool.query(query, params);
        return results;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get all transaction details
exports.getAllTransactionDetails = async (req, res) => {
    try {
        const results = await executeQuery('SELECT * FROM Book_Transaction_Details');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
