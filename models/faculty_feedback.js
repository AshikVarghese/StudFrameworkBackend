const connection = require("./dbconfig");

function fetch_faculty_feedback(params, callback) {
  connection.query(
    "SELECT DISTINCT F.batch, F.dept,F.feedback, password FROM `student`.`faculty_feedback` AS F JOIN `student`.`user_login_details` USING (roll_no) where roll_no= '" +
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
function insert_faculty_feedback(params, callback) {
  connection.query(
    "INSERT INTO `student`.`faculty_feedback` ('batch', 'dept','feedback', password) VALUES (`" +
      params. batch+
      "`, `" +
      params.dept +
      "`, `" +
      params.feedback +
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
function edit_faculty_feedback(params, callback) {
  connection.query(
    "UPDATE `student`.`faculty_feedback` set (batch=?, dept=?,feedback=?) WHERE roll_no = ?",
    [
      params.batch,
      params.dept,
      params.feedback,
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

function delete_faculty_feedback(params, callback) {
  connection.query(
    "DELETE from `student`.`faculty_feedback` where roll_no = ?",
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

module.exports(fetch_faculty_feedback,insert_faculty_feedback,edit_faculty_feedback,delete_faculty_feedback);
