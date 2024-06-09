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

exports.getAllEvents = async (req, res) => {
    try {
        const results = await executeQuery('SELECT * FROM Patron_Events');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addEvent = async (req, res) => {
    const { eventName, event_Date, description, attendance, staffID } = req.body;

    // Basic validation to ensure required fields are not null
    if (!eventName || !event_Date || !staffID || attendance === undefined) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if the staffID exists in the Staff table
    const staffExists = await db.pool.query('SELECT 1 FROM Staff WHERE staffID = ?', [staffID]);
    if (staffExists[0].length === 0) {
        return res.status(404).json({ error: "Staff ID does not exist" });
    }

    const query = 'INSERT INTO Patron_Events (eventName, event_Date, description, attendance, staffID) VALUES (?, ?, ?, ?, ?)';
    try {
        const [result] = await db.pool.query(query, [eventName, event_Date, description, attendance, staffID]);
        res.json({ message: "Event added successfully!", eventId: result.insertId });
    } catch (err) {
        console.error('Error executing addEvent query:', err.message); // Log the error message to the console
        res.status(500).json({ error: 'Database error occurred: ' + err.message });
    }
};


exports.deleteEvent = async (req, res) => {
    const { eventID } = req.params;
    try {
        const result = await executeQuery('DELETE FROM Patron_Events WHERE eventID = ?', [eventID]);
        if (result.affectedRows) {
            res.json({ message: "Event deleted successfully!" });
        } else {
            res.status(404).json({ message: "Event not found!" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEvent = async (req, res) => {
    const { eventID } = req.params;
    const { eventName, event_Date, description, attendance, staffID } = req.body;
    try {
        const result = await executeQuery('UPDATE Patron_Events SET eventName = ?, event_Date = ?, description = ?, attendance = ?, staffID = ? WHERE eventID = ?', [eventName, event_Date, description, attendance, staffID, eventID]);
        if (result.affectedRows) {
            res.json({ message: "Event updated successfully!" });
        } else {
            res.status(404).json({ message: "Event not found!" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
