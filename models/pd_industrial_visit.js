/** @format */

const connection = require("../config/dbconfig");

function PdIndustry_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_industrial_visit` inner join student_details on pd_industrial_visit.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdIndustry_CA_display(callback) {
  connection.query(
    "SELECT * from pd_industrial_visit WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_industrial_visit` WHERE(roll_no=?)",
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

function PdIndustry_verify(callback) {
  connection.query(
    "UPDATE `pd_industrial_visit` SET verified=? WHERE (s_no = ?)",
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

function PdIndustry_delete(callback) {
  connection.query(
    "DELETE FROM `pd_industrial_visit` WHERE (s_no = ?)",
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

function PdIndustry_edit(callback) {
  connection.query(
    "UPDATE `pd_industrial_visit` SET industry_name = ?,date = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.industry_name,
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

function PdIndustry_Stud_insert(callback) { 
  connection.query(
    "INSERT INTO pd_industrial_visit(roll_no,industry_name,date,outcome) VALUES(?,?,?,?)",
    [
      params.StudentDetails,
      params.Industry,
      params.DateYear,
      params.Outcome,
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
  PdIndustry_Stud_display: PdIndustry_Stud_display,
  PdIndustry_CA_display: PdIndustry_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdIndustry_verify: PdIndustry_verify,
  PdIndustry_delete: PdIndustry_delete,
  PdIndustry_edit: PdIndustry_edit,
  PdIndustry_Stud_insert: PdIndustry_Stud_insert,
};
