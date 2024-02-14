var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sneha@23",
    database: "dbRent"
});

module.exports = con;