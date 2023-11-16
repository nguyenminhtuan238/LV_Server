const mysql = require('mysql2');
const connect=   mysql.createConnection({
  host: process.env.Host,
  user: process.env.user,
  password:process.env.PASSWORDDB,
  database: process.env.database
});

module.exports= connect.promise()