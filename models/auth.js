const connection = require("../config/dbconfig");

var email = "alisonroy.23cs@licet.ac.in";

connection.query(
  "SELECT DISTINCT T.name, T.dept,password FROM `sql6439264`.`student_details` AS T JOIN `sql6439264`.`user_login_details` USING (email) where email= '" +
    email +
    "' ;",
  function (err, results, fields) {
    console.log(results[0]); // results contains rows returned by server
    // console.log(fields[0].name); // fields contains extra meta data about results, if available
  }
);

connection.end();

28 / 09 / 2021;
