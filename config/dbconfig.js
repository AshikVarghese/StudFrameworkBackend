var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "SG-student-5242-mysql-master.servers.mongodirector.com",
  user: "sgroot",
  password: "wI0P.Ick137mAMvw",
  database: "student",
});

connection.connect((err) => {
  if (err) throw err;
  else {
    console.log("Connection Successfull");
  }
});
module.exports = connection;
