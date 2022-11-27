/** @format */

const connection = require("../config/dbconfig");

function PdMini_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_mini_project` inner join student_details on pd_mini_project.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        return callback(results);
      }
    }
  );
}

function PdMini_CA_display(callback) {
  connection.query(
    "SELECT * from pd_mini_project WHERE(roll_no=?)",
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

function ProfDevelop_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_mini_project` WHERE(roll_no=?)",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        return callback(results);
      }
    }
  );
}

function PdMini_verify(callback) {
  connection.query(
    "UPDATE `pd_mini_project` SET verified=? WHERE (s_no = ?)",
    [params.verify, params.columnid],
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

function PdMini_delete(callback) {
  connection.query(
    "DELETE FROM `pd_mini_project` WHERE (s_no = ?)",
    [params.columnid],
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

function PdMini_edit(callback) {
  connection.query(
    "UPDATE `pd_mini_project` SET project_title = ?,objective = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.project_title,
      params.objective,
      params.outcome,
      params.credits,
      params.columnid,
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

function PdMini_Stud_insert(params, callback) {
  connection.query(
    "INSERT INTO pd_mini_project(roll_no,project_title,objective,outcome,verified) VALUES(?,?,?,?,?)",
    [params.StudentDetails, params.Title, params.Objective, params.Outcome, params.status,],
    (err, results, fields) => {
      if (err) {
        return callback({message : "Server Down", code : 500});
      } else {
        return callback({message : "Success", code : 200});
      }
    }
  );
}

module.exports = {
  PdMini_Stud_display: PdMini_Stud_display,
  PdMini_CA_display: PdMini_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdMini_verify: PdMini_verify,
  PdMini_delete: PdMini_delete,
  PdMini_edit: PdMini_edit,
  PdMini_Stud_insert: PdMini_Stud_insert,
};
