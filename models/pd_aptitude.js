const connection = require("../config/dbconfig");

function get_aptitude(callback) {
  connection.query(
    "SELECT * from `pd_aptitude` WHERE(roll_no=?)",
    [params.RollNumber],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        return callback(results);
      }
    }
  );
}

function edit_aptitude(callback) {
  connection.query("UPDATE `pd_aptitude` SET assessment = ?, date = ?, remarks = ?, credits = ? WHERE (s_no = ?)",
  [
    params.assessment,
    params.date,
    params.remarks,
    params.credits,
    params.columnid
  ],
  (err, results, fields) => {
    if (err) {
      console.log(err);
      return callback(false);
    } else {
      return callback(results);
    }
   }
  );
}

function delete_aptitude(callback) {
    connection.query(
        "DELETE FROM `pd_aptitude` WHERE (s_no = ?)",
        [params.columnid],
        (err, results, fields) => {
          if (err) {
            return callback("Delete Failed");
          } else {
            return callback("Delete Success");
          }
        }
      );
}

module.exports = {
    edit_aptitude : edit_aptitude,
    delete_aptitude : delete_aptitude,
    get_aptitude : get_aptitude
}
