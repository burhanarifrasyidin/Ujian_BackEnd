const mysql = require('mysql')

const db = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '456',
    database : 'movie',
    port : 3306
})

module.exports = db