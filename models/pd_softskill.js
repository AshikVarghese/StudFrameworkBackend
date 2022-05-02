const connection = require("../config/dbconfig");

function get_soft_skill(callback) {
  connection.query(
    "SELECT * from `pd_soft_skill` WHERE(roll_no=?)",
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

function edit_soft_skill(callback) {
  connection.query("UPDATE `pd_soft_skill` SET trainer = ?, date = ?, remarks = ?, credits = ? WHERE (s_no = ?)",
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

function delete_soft_skill(callback) {
    connection.query(
        "DELETE FROM `pd_soft_skill` WHERE (s_no = ?)",
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
    edit_soft_skill : edit_soft_skill,
    delete_soft_skill : delete_soft_skill,
    get_soft_skill : get_soft_skill
}
