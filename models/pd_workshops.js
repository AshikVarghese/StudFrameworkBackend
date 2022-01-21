/** @format */

const connection = require("../config/dbconfig");

function PdWork_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_workshops` inner join student_details on pd_workshops.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdWork_CA_display(callback) {
  connection.query(
    "SELECT * from pd_workshops WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_workshops` WHERE(roll_no=?)",
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

function PdWork_verify(callback) {
  connection.query(
    "UPDATE `pd_workshops` SET verified=? WHERE (s_no = ?)",
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

function PdWork_delete(callback) {
  connection.query(
    "DELETE FROM `pd_workshops` WHERE (s_no = ?)",
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

function PdWork_edit(callback) {
  connection.query(
    "UPDATE `pd_workshops` SET topic = ?,resource_person = ?,date = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.topic,
      params.resource_person,
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

function PdWork_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_workshops(roll_no,topic,date,resource_person,outcome,verified) VALUES(?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Topic,
      params.DateYear,
      params.Resource,
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
  PdWork_Stud_display: PdWork_Stud_display,
  PdWork_CA_display: PdWork_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdWork_verify: PdWork_verify,
  PdWork_delete: PdWork_delete,
  PdWork_edit: PdWork_edit,
  PdWork_Stud_insert: PdWork_Stud_insert,
};
