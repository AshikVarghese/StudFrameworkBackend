/** @format */

const connection = require("../config/dbconfig");

function PdPublica_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_publications` inner join student_details on pd_publications.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdPublica_CA_display(callback) {
  connection.query(
    "SELECT * from pd_publications WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_publications` WHERE(roll_no=?)",
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

function PdPublica_verify(callback) {
  connection.query(
    "UPDATE `pd_publications` SET verified=? WHERE (s_no = ?)",
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

function PdPublica_delete(callback) {
  connection.query(
    "DELETE FROM `pd_publications` WHERE (s_no = ?)",
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

function PdPublica_edit(callback) {
  connection.query(
    "UPDATE `pd_publications` SET conf_or_journal = ?,name = ?,title = ?,impact_factor = ?,indexed_in = ?, credits=? WHERE (s_no = ?)",
    [
      params.conf_or_journal,
      params.name,
      params.title,
      params.impact_factor,
      params.indexed_in,
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

function PdPublica_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_publications(roll_no,conf_or_journal,name,title,impact_factor,indexed_in,verified) VALUES(?,?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Conference,
      params.Name,
      params.Title,
      params.Impact,
      params.Index,
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
  PdPublica_Stud_display: PdPublica_Stud_display,
  PdPublica_CA_display: PdPublica_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdPublica_verify: PdPublica_verify,
  PdPublica_delete: PdPublica_delete,
  PdPublica_edit: PdPublica_edit,
  PdPublica_Stud_insert: PdPublica_Stud_insert,
};
