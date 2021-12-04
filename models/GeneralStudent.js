const connection = require("../config/dbconfig");

function fetch_student_forstudent(params, callback) {
    connection.query(
      "SELECT * FROM student_details WHERE(roll_no = ?)",[params.StudentDetails],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return callback(false);
        }
        return callback(results);
      }
    );
  }

  module.exports = {fetch_student_forstudent:fetch_student_forstudent};
