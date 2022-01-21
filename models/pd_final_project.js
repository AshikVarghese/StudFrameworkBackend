/** @format */

const connection = require("../config/dbconfig");

function PdFinal_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_final_project` inner join student_details on pd_final_project.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdFinal_CA_display(callback) {
  connection.query(
    "SELECT * from pd_final_project WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_final_project` WHERE(roll_no=?)",
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

function PdFinal_verify(callback) {
  connection.query(
    "UPDATE `pd_final_project` SET verified=? WHERE (s_no = ?)",
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

function PdFinal_delete(callback) {
  connection.query(
    "DELETE FROM `pd_final_project` WHERE (s_no = ?)",
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

function PdFinal_edit(callback) {
  connection.query(
    "UPDATE `pd_final_project` SET title = ?,objective = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.title,
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

function PdFinal_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_final_project(roll_no,title,objective,outcome,verified) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Title,
      params.Objective,
      params.Outcome,
      params.status,
    ],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback("Not Inserted");
      } else {
        return callback("Inserted");
      }
    }
  );
}

module.exports = {
  PdFinal_Stud_display: PdFinal_Stud_display,
  PdFinal_CA_display: PdFinal_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdFinal_verify: PdFinal_verify,
  PdFinal_delete: PdFinal_delete,
  PdFinal_edit: PdFinal_edit,
  PdFinal_Stud_insert: PdFinal_Stud_insert,
};
