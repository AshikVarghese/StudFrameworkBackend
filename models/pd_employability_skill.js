const connection = require("../config/dbconfig");

function get_employability_skill(callback) {
  connection.query(
    "SELECT * from `pd_employability_skill` WHERE(roll_no=?)",
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

function edit_employability_skill(callback) {
  connection.query("UPDATE `pd_employability_skill` SET tech_skill=?, trainer = ?, date = ?, remarks = ?, credits = ? WHERE (s_no = ?)",
  [
    params.techskill,
    params.trainer,
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

function delete_employability_skill(callback) {
    connection.query(
        "DELETE FROM `pd_employability_skill` WHERE (s_no = ?)",
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
    edit_employability_skill : edit_employability_skill,
    delete_employability_skill : delete_employability_skill,
    get_employability_skill : get_employability_skill
}
