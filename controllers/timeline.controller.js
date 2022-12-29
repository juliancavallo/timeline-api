const controller = {};
const pool = require('../db/dbconnection');

controller.getAll = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('select * from Timeline', (queryError, rows) => {
            if(queryError) {
                console.log(queryError);
                res.status(500).json({
                    "message": "An error has occurred"
                })
            }
            else 
                res.json(rows.map(x => ({
                    id: x.Id,
                    title: x.Title
                })));
        });
    });
}

controller.save = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('insert into Timeline set ?', [req.body], (queryError, rows) => {
            if(queryError){
                console.log(queryError);
                res.status(500).json({
                    "message": "An error has occurred"
                })
            }
            else 
                res.send("Inserted");
        });
    });
}

controller.update = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('update Timeline set ? where id = ?', [req.body, req.params.id], (queryError, rows) => {
            if(queryError){
                console.log(queryError);
                res.status(500).json({
                    "message": "An error has occurred"
                })
            }
            else 
                res.send("Updated");
        });
    });
}

controller.delete = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('delete from Timeline where id = ?', [req.params.id], (queryError, rows) => {
            if(queryError){
                console.log(queryError);
                res.status(500).json({
                    "message": "An error has occurred"
                })
            }
            else 
                res.send("Deleted");
        });
    });
}

module.exports = controller;