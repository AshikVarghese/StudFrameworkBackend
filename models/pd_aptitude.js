const connection = require("../config/dbconfig");

function delete_aptitude(params, callback) {
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
    delete_aptitude : delete_aptitude
}
