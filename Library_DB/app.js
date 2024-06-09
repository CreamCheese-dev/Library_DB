// SETUP
const express = require('express');
const cors = require('cors');
const db = require('./database/db-connector');

// Define Routes
const booksRoutes = require('./api/routes/books');
const patronsRoutes = require('./api/routes/patrons');
const transactionsRoutes = require('./api/routes/transactions');
const staffRoutes = require('./api/routes/staff');
const attendancesRoutes = require('./api/routes/attendances');
const eventRoutes = require('./api/routes/events');

// PORT SETUP
const app = express();
const PORT = 3000;

// Middleware to enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api/books', booksRoutes);
app.use('/api/patrons', patronsRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/attendances', attendancesRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/staff', staffRoutes);

// Listen on HTTP instead of HTTPS
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
