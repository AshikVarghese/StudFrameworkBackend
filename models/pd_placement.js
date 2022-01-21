/** @format */

const connection = require("../config/dbconfig");

function PdPlace_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_placement` inner join student_details on pd_placement.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdPlace_CA_display(callback) {
  connection.query(
    "SELECT * from pd_placement WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_placement` WHERE(roll_no=?)",
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

function PdPlace_verify(callback) {
  connection.query(
    "UPDATE `pd_placement` SET verified=? WHERE (s_no = ?)",
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

function PdPlace_delete(callback) {
  connection.query(
    "DELETE FROM `pd_placement` WHERE (s_no = ?)",
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

function PdPlace_edit(callback) {
  connection.query(
    "UPDATE `pd_placement` SET aptitude = ?,soft_skills = ?,reasoning = ?,technical_training = ?, credits=? WHERE (s_no = ?)",
    [
      params.aptitude,
      params.soft_skills,
      params.reasoning,
      params.technical_training,
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

function PdPlace_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_placement(roll_no,aptitude,soft_skills,reasoning,technical_training) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Aptitude,
      params.Soft,
      params.Reasoning,
      params.Technical,
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
  PdPlace_Stud_display: PdPlace_Stud_display,
  PdPlace_CA_display: PdPlace_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdPlace_verify: PdPlace_verify,
  PdPlace_delete: PdPlace_delete,
  PdPlace_edit: PdPlace_edit,
  PdPlace_Stud_insert: PdPlace_Stud_insert,
};
