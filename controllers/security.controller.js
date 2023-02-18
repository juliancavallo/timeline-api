const controller = {};
const pool = require('../db/dbconnection');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
require('dotenv').config();

controller.login = (req, res) => {
    const hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('hex');

    pool.getConnection((err, conn) => {
        conn.query('SELECT * FROM User WHERE username = ? AND password = ?', [req.body.username, hashedPassword], (error, results, fields) => {
            if (error) {
                console.error('Error querying database:', error);
              } else if (results.length > 0) {
                const token = jwt.sign(
                  { user_id: req.body.username },
                  process.env.JWT_SECRET_KEY,
                  {
                    expiresIn: "2h",
                  }
                );

                res.status(200).json({
                  "message": "Login successful",
                  "token": token
                })
              } else {
                res.status(500).json({
                  "message": 'Invalid username or password.'
                })
              }
        });
    });
}

module.exports = controller;