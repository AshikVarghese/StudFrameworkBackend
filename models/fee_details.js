const connection = require("./dbconfig");

function fetch_fee_details(params, callback) {
  connection.query(
    "SELECT DISTINCT D.roll_no, D.reg_no,D.quota ,D.first_grad,D.amt_to_be_paid,D.amt_paid,D.amt_due,D.paid_date, password FROM `student`.`fee_details` AS D JOIN `sql6439264`.`user_login_details` USING (roll_no) where roll_no= '" +
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
function insert_fee_details(params, callback) {
  connection.query(
    "INSERT INTO `student`.`fee_details` ('D.roll_no', 'D.reg_no','D.quota' ,'D.first_grad','D.amt_to_be_paid','D.amt_paid','D.amt_due','D.paid_date','password' ) VALUES (`" +
      params.roll_no +
      "`, `" +
      params.reg_no +
      "`, `" +
      params.quota +
      "`, `" +
      params.first_grad +
      "`, `" +
      params.amt_to_be_paid +
      "`, `" +
      params.amt_paid +
      "`, `" +
      params.amt_due +
      "`, `" +
      params.paid_date +
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
function edit_fee_details(params, callback) {
  connection.query(
    "UPDATE `student`.`fee_details` set (roll_no=?, reg_no=?,quota=?,first_grad=?,amt_to_be_paid=?,amt_paid=?,amt_due=?,paid_date=?) WHERE roll_no = ?",
    [
      params.roll_no ,
      params.reg_no ,
      params.quota ,
      params.first_grad ,
      params.amt_to_be_paid ,
      params.amt_paid ,
      params.amt_due ,
      params.paid_date ,
      params.password ,
      params.roll_no,
    ],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(true);
    }
  );
}

function delete_fee_details(params, callback) {
  connection.query(
    "DELETE from `student`.`fee_details` where roll_no = ?",
    [params.roll_no],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(true);
    }
  );
}
connection.end();

module.exports(fetch_fee_details,insert_fee_details,edit_fee_details,delete_fee_details);
