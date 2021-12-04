/** @format */

const connection = require("../config/dbconfig");

// 1. Retrieve columns from bulk upload
// 2. Retrieve columns from table
// 3. find uncommon columns.
// 4. Add those uncommon columns in table.
// 5. Bulk Upload.
//let params = { roll_no: 123, mode: "CAT", subj_in oded: "XYZ", marks: 100 };

function insert_academic_details(params, callback) {
  connection.query(
    "SELECT * FROM INFORMATION_SCHEMA.COLUMNS where TABLE_NAME='academics'",
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      let keys = Object.keys(params);
      var prev_columns = results.map((col) => col.COLUMN_NAME);
      // console.log(prev_columns);
      // console.log(keys);
      var columns = keys.filter(function (obj) {
        return prev_columns.indexOf(obj) == -1;
      });
      // console.log(columns);
      for (var i = 0; i < columns.length; i++) {
        connection.query(
          "ALTER TABLE academics add column " + columns[i] + " varchar(100)",
          (err, results, fields) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
      connection.query(
        "SELECT * from academics where roll_no = ?",
        params.roll_no,
        (err, results, fields) => {
          if (results.length == 0) {
            var columns1 = keys.concat(columns);
            const unique_columns = [...new Set(columns1)];
            var questionmarks = "";
            questionmarks = "?,".repeat(unique_columns.length);
            connection.query(
              "INSERT into academics values" + questionmarks,
              Object.values(params)
            );
          } else {
            // update record
            update_academic_details(params, (flag) => {
              return flag;
            });
          }
        }
      );
    }
  );
}
function fetch_academic_columns(callback) {
  connection.query(
    "SELECT * FROM INFORMATION_SCHEMA.COLUMNS where TABLE_NAME='academics'",
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
      return callback(results);
    }
  );
}

function fetch_academic_details_official(callback) {
  connection.query(
    "SELECT * from academics inner join student_details on academics.roll_no=student_details.roll_no ",
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}
function fetch_academic_details_hod(params, callback) {
  // console.log(params);
  connection.query(
    "SELECT * from academics inner join student_details on academics.roll_no=student_details.roll_no where student_details.dept=?",
    [params.department],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}
function fetch_academic_details_classadvisor(params, callback) {
  connection.query(
    "SELECT * from academics inner join student_details on academics.roll_no=student_details.roll_no where student_details.batch=?",
    [params.batch],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}

function update_academic_details(params, callback) {
  var columns = "";
  var updated_cols = Object.keys(params);

  for (var i = 0; i < updated_cols.length - 1; i++) {
    columns += updated_cols[i];
    columns += "=?,";
  }
  columns = columns + updated_cols[updated_cols.length - 1] + "=? ";
  connection.query(
    "UPDATE academics set " + columns + "where roll_no = ?",
    [...Object.values(params), params["roll_no"]],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback(err);
      } else {
        return callback(true);
      }
    }
  );
}

function delete_academic_details(params, callback) {
  connection.query(
    "DELETE from academics` where roll_no = ?",
    [params.roll_no],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(true);
    }
  );
}

function fetch_academic_values(params, callback) {
  connection.query(
    "SELECT * from academics where roll_no = ?",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      } else {
        console.log(results);
        return callback(results);
      }
    }
  );
}

function fetch_academic_summary_record(params, callback) {
  connection.query(
    "SELECT * from academic_summary where roll_no = ?",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      } else {
        // console.log(results);
        return callback(results);
      }
    }
  );
}

module.exports = {
  insert_academic_details: insert_academic_details,
  fetch_academic_details_official: fetch_academic_details_official,
  fetch_academic_details_hod: fetch_academic_details_hod,
  fetch_academic_details_classadvisor: fetch_academic_details_classadvisor,
  update_academic_details: update_academic_details,
  delete_academic_details: delete_academic_details,
  fetch_academic_columns: fetch_academic_columns,
  fetch_academic_values: fetch_academic_values,
  fetch_academic_summary_record: fetch_academic_summary_record,
};
