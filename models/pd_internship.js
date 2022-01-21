/** @format */

const connection = require("../config/dbconfig");

function PdIntern_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_internship` inner join student_details on pd_internship.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdIntern_CA_display(callback) {
  connection.query(
    "SELECT * from pd_internship WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_internship` WHERE(roll_no=?)",
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

function PdIntern_verify(callback) {
  connection.query(
    "UPDATE `pd_internship` SET verified=? WHERE (s_no = ?)",
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

function PdIntern_delete(callback) {
  connection.query(
    "DELETE FROM `pd_internship` WHERE (s_no = ?)",
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

function PdIntern_edit(callback) {
  connection.query(
    "UPDATE `pd_internship` SET company_name = ?,duration = ?,date = ?,reference = ?, credits=? WHERE (s_no = ?)",
    [
      params.company_name,
      params.duration,
      params.date,
      params.reference,
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

function PdIntern_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_internship(roll_no,company_name,date,duration,reference,verified) VALUES(?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Company,
      params.DateYear,
      params.Duration,
      params.Reference,
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
  PdIntern_Stud_display: PdIntern_Stud_display,
  PdIntern_CA_display: PdIntern_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdIntern_verify: PdIntern_verify,
  PdIntern_delete: PdIntern_delete,
  PdIntern_edit: PdIntern_edit,
  PdIntern_Stud_insert: PdIntern_Stud_insert,
};
