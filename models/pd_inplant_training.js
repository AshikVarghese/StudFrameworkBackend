/** @format */

const connection = require("../config/dbconfig");

function PdInplant_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_inplant_training` inner join student_details on pd_inplant_training.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdInplant_CA_display(callback) {
  connection.query(
    "SELECT * from pd_inplant_training WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_inplant_training` WHERE(roll_no=?)",
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

function PdInplant_verify(callback) {
  connection.query(
    "UPDATE `pd_inplant_training` SET verified=? WHERE (s_no = ?)",
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

function PdInplant_delete(callback) {
  connection.query(
    "DELETE FROM `pd_inplant_training` WHERE (s_no = ?)",
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

function PdInplant_edit(callback) {
  connection.query(
    "UPDATE `pd_inplant_training` SET industry = ?,date = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.industry,
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

function PdInplant_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_inplant_training(roll_no,industry,date,outcome,verified) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Industry,
      params.DateYear,
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
  PdInplant_Stud_display: PdInplant_Stud_display,
  PdInplant_CA_display: PdInplant_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdInplant_verify: PdInplant_verify,
  PdInplant_delete: PdInplant_delete,
  PdInplant_edit: PdInplant_edit,
  PdInplant_Stud_insert: PdInplant_Stud_insert,
};
