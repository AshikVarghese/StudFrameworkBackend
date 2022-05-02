const connection = require("../config/dbconfig");

function get_sdiscovery(callback) {
  connection.query(
    "SELECT * from `pd_system_discovery` WHERE(roll_no=?)",
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

function edit_sdiscovery(callback) {
  connection.query("UPDATE `pd_system_discovery` SET components = ?, date = ?, remarks = ?, credits = ? WHERE (s_no = ?)",
  [
    params.components,
    params.date,
    params.remarks,
    params.credits,
    params.columnid
  ],
  (err, results, fields) => {
    if (err) {
      console.log(err);
      return callback("Edit Failed");
    } else {
      return callback("Edited Successfully");
    }
   }
  );
}

function delete_sdiscovery(callback) {
    connection.query(
        "DELETE FROM `pd_system_discovery` WHERE (s_no = ?)",
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
    edit_sdiscovery : edit_sdiscovery,
    delete_sdiscovery : delete_sdiscovery,
    get_sdiscovery : get_sdiscovery
}
