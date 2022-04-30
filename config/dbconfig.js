/** @format */

var mysql = require("mysql2");

// Test connection
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "student",
// });

// Production Connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "student",
});

connection.connect((err) => {
  if (err) throw err;
  else {
    console.log("Connection Successfull");
  }
});
module.exports = connection;
