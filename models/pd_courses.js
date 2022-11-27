/** @format */

const connection = require("../config/dbconfig");

function PdCour_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_courses` inner join student_details on pd_courses.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdCour_CA_display(callback) {
  connection.query(
    "SELECT * from pd_courses WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_courses` WHERE(roll_no=?)",
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

function PdCour_verify(callback) {
  connection.query(
    "UPDATE `pd_courses` SET verified=? WHERE (s_no = ?)",
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

function PdCour_delete(callback) {
  connection.query(
    "DELETE FROM `pd_courses` WHERE (s_no = ?)",
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

function PdCour_edit(callback) {
  connection.query(
    "UPDATE `pd_courses` SET course_name = ?,date = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.course_name,
      params.date,
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

function PdCour_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_courses(roll_no,course_name,date,outcome,verified) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Course,
      params.DateYear,
      params.Outcome,
      params.status,
    ],
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
  PdCour_Stud_display: PdCour_Stud_display,
  PdCour_CA_display: PdCour_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdCour_verify: PdCour_verify,
  PdCour_delete: PdCour_delete,
  PdCour_edit: PdCour_edit,
  PdCour_Stud_insert: PdCour_Stud_insert,
};
