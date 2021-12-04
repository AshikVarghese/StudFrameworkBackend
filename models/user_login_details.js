const connection = require("./dbconfig");

function user_login_details(params, callback) {
  connection.query(
    "SELECT DISTINCT J.password, J.auth_token,J.dept ,J.user_type, password FROM `sql6439264`.`user_login_details` AS J JOIN `sql6439264`.`user_login_details` USING (roll_no) where roll_no= '" +
    roll_no +
    "' ;",
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}

connection.end();

module.exports(user_login_details);
