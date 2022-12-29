const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit : 10,
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PWD,
    database : process.env.DATABASE_NAME,
    ssl:{
        rejectUnauthorized: true
    }

});

module.exports = pool;