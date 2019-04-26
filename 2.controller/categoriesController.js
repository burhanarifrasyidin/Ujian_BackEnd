var db = require('../1.database')

module.exports = {
    getAllCtgr: (req, res) => {
        var sql = 'select * from categories;'
        db.query(sql, (err, hasil) => {
            if(err)throw err
            res.send(hasil)
        })
    },
    addCtgr: (req, res) => {
        var data = req.body
        var sql = `insert into categories set ?`
        db.query(sql, data, (err, hasil) => {
            if (err) throw err
            res.redirect('/category/allCategory')
        })
    },
    deleteCtgr: (req, res) => {
        var id = req.params.id
        var sql = `delete from categories where id = ${id};`
        db.query(sql, (err, hasil) => {
            if (err) throw err
            res.redirect('/category/allCategory')
        })
    },
    editCtgr: (req, res) => {
        var id = req.params.id
        var data = req.body
        var sql = `update categories set ? where Id=${id};`
        db.query(sql, data, (err, hasil) => {
            if (err) throw err
            res.redirect('/category/allCategory')
        })
    }
}