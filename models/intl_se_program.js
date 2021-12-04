const connection = require("./dbconfig");


function fetch_intl_se_program(params, callback) {
  connection.query(
    "SELECT DISTINCT I.campus, I.date,I.project ,I.outcome,I.personal_development,I.fl_completed_pursuing, password FROM `student`.`intl_se_program` AS I JOIN `student`.`user_login_details` USING (roll_no) where roll_no= '" +
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

function insert_intl_se_program(params, callback) {
  connection.query(
    "INSERT INTO `student`.`intl_se_program` (` I.campus', 'I.date','I.project' ,'I.outcome','I.personal_development','I.fl_completed_pursuing', 'password') VALUES (`" +
    params.campus+
    "`, `" +
   
    params.date +
    "`, `" +
    params.project +
    "`, `" +
    params.outcome +
    "`, `" +
    params.personal_development +
    "`, `" +
    params.fl_completed_pursuing+
    "`, `" +
    params.password +
    "`, `0`)",
  (err, results, fields) => {
    if (err) {
      return callback(false);
    }
    return callback("success");
  }
  );
}


function delete_intl_se_program(params, callback) {
  connection.query(
    "DELETE from `student`.`intl_se_program` where roll_no = ?",
    [params.roll_no],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(true);
    }
  );
}
function edit_intl_se_program(params, callback) {
  connection.query(
    "UPDATE `student`.`intl_se_program` set (campus=?,date=?,project=?,outcome=?,personal_development=?,completed_persuing=?) WHERE roll_no = ?",
    [
      params.campus,
      params.date,
      params.project,
      params.outcome,
      params.personal_development,
      params.fl_completed_pursuing,
      
      
    ],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(true);
    }
  );
}

connection.end();

module.exports(fetch_intl_se_program,insert_intl_se_program,delete_intl_se_program,edit_intl_se_program);
