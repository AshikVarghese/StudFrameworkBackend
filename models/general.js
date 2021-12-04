var crypto = require("crypto");
const connection = require("../config/dbconfig");
function general(params, callback) {
  connection.query(
    'SELECT `roll_no`, `reg_no` ,`sname`,`aadhar_no`,`licet_email`,`batch`,`dept`,`quota`,`gender`,`dob`,`father_name`,`mother_name`,`father_mob_no`,`mother_mob_no`,`religion`,`address` FROM `student`.`student_details` WHERE `dept` = "' +
      params.dept +
      '" AND `batch` = "' +
      params.batch +
      '";',
    (err, details, fields) => {
      if (err) {
        return callback("fetch-fail");
      } else {
        return callback(details);
      }
    }
  );
}
module.exports = { general: general };
