const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',  // or your database server IP
    user: 'root',
    password: 'magicant_EX3',
    database: 'ReadRenaissance',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports.pool = pool.promise();
