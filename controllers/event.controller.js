const controller = {};
const pool = require('../db/dbconnection');

controller.getAll = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('select * from TimelineEvent where IdTimeline = ? order by Date asc', [req.params.idTimeline], (queryError, rows) => {
            if(queryError) {
                console.log(queryError);
                res.status(500).json({
                    "message": "An error has occurred"
                })
            }
            else 
                res.json(rows.map(x => ({
                    id: x.Id,
                    title: x.Title,
                    summary: x.Summary,
                    idTimeline: x.IdTimeline,
                    date: x.Date
                })));
        });
    });
}

controller.save = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('insert into TimelineEvent set ?', [req.body], (queryError, rows) => {
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

controller.saveBulk = (req, res) => {
    pool.getConnection((err, conn) => {
        const query = `insert into TimelineEvent (Title, Summary, Date, IdTimeline) values ${req.body.map(x => `('${x.title}', '${x.summary}', '${x.date}', ${x.idTimeline})`).join(",")}`;
        console.log(query);
        conn.query(query, (queryError, rows) => {
        
            if(queryError){
                console.log(queryError);
                res.status(500).json({
                    "message": "An error has occurred"
                })
            }
            else 
                res.send("Inserted bulk");
        });
    });
}

controller.update = (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('update TimelineEvent set ? where id = ?', [req.body, req.params.id], (queryError, rows) => {
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
        conn.query('delete from TimelineEvent where id = ?', [req.params.id], (queryError, rows) => {
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