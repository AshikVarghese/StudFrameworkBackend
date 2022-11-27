/** @format */

const connection = require("../config/dbconfig");

function PdComp_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_competitions` inner join student_details on pd_competitions.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        return callback(results);
      }
    }
  );
}

function PdComp_CA_display(callback) {
  connection.query(
    "SELECT * from pd_competitions WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_competitions` WHERE(roll_no=?)",
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

function PdComp_verify(callback) {
  connection.query(
    "UPDATE `pd_competitions` SET verified=? WHERE (s_no = ?)",
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

function PdComp_delete(callback) {
  connection.query(
    "DELETE FROM `pd_competitions` WHERE (s_no = ?)",
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

function PdComp_edit(callback) {
  connection.query(
    "UPDATE `pd_competitions` SET comp_name = ?,comp_type = ?,date = ?,position_secured = ?, credits=? WHERE (s_no = ?)",
    [
      params.comp_name,
      params.comp_type,
      params.date,
      params.position_secured,
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

function PdComp_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_competitions(roll_no,comp_name,comp_type,date,position_secured,verified) VALUES(?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Name,
      params.Competition,
      params.DateYear,
      params.Position,
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
  PdComp_Stud_display: PdComp_Stud_display,
  PdComp_CA_display: PdComp_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdComp_verify: PdComp_verify,
  PdComp_delete: PdComp_delete,
  PdComp_edit: PdComp_edit,
  PdComp_Stud_insert: PdComp_Stud_insert,
};
