const db = require('./../1.database')

module.exports = {
    getConData: (req, res) => {
        db.query('select m.nama as Nama_Movie,c.nama as Nama_Category from movcat join movies m on idmovie = m.id join categories c on idcategory = c.id;', (err, hasil) => {
            if (err) throw err
            if (hasil) {
                res.send(hasil)
            }
        })
    },
    addCon: (req, res) => {
        var dataMovie = {
            nama: req.body.nama,
            tahun: req.body.tahun,
            description: req.body.description
        }
        var categories = req.body.categories
        db.query(`insert into movies set ?`, dataMovie, (err, hasil) => {
            if (err) throw err
            db.query(`select id from movies where nama = '${dataMovie.nama}'`, (err, hasil1) => {
                if (err) throw err
                db.query(`insert into movcat set ?`, {
                    idmovie: hasil1[0].id,
                    idcategory: categories
                }, (err, hasil2) => {
                    if (err) throw err
                    res.redirect('/connector/allConnect')
                })
            })
        })
    },
    delCon: (req, res) => {
        var id = req.params.id
        var sql = `delete from movcat where id =${id};`
        db.query(sql, (err, hasil) => {
            if (err) throw err
            res.redirect('/connector/allConnect')
        })
    }
}
