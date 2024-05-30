const mysql2 = require('mysql2')

const Db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'somos_do_bem'
})

module.exports = {Db}