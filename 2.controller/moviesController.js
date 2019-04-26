var db = require('../1.database')

module.exports = {
    getAllData: (req, res) => {
        var sql = 'select * from movies;'
        db.query(sql, (err, hasil) => {
            if(err) throw err
            res.send(hasil)
        })
    },
    addData: (req, res) => {
        var data = req.body
        var sql = `insert into movies set ?`
        db.query(sql, data, (err, hasil) => {
            if (err) throw err
            res.redirect('/data/allData')
        })
    },
    deleteData: (req, res) => {
        var id = req.params.id
        var sql = `delete from movies where id = ${id};`
        db.query(sql, (err, hasil) => {
            if (err) throw err
            res.redirect('/data/allData')
        })
    },
    editData: (req, res) => {
        var id = req.params.id
        var data = req.body
        var sql = `update movies set ? where Id=${id};`
        db.query(sql, data, (err, hasil) => {
            if (err) throw err
            res.redirect('/data/allData')
        })
    }










}