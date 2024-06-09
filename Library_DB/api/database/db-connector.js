const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'XXX',
    user: 'XXX',
    password: 'XXX',
    database: 'XXX',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports.pool = pool.promise();
