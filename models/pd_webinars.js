/** @format */

const connection = require("../config/dbconfig");

function PdWeb_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_webinar` inner join student_details on pd_webinar.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdWeb_CA_display(callback) {
  connection.query(
    "SELECT * from pd_webinar WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_webinar` WHERE(roll_no=?)",
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

function PdWeb_verify(callback) {
  connection.query(
    "UPDATE `pd_webinar` SET verified=? WHERE (s_no = ?)",
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

function PdWeb_delete(callback) {
  connection.query(
    "DELETE FROM `pd_webinar` WHERE (s_no = ?)",
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

function PdWeb_edit(callback) {
  connection.query(
    "UPDATE `pd_webinar` SET topic = ?,resource_person = ?,date = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
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

function PdWeb_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_webinar(roll_no,topic,date,resource_person,outcome,verified) VALUES(?,?,?,?,?,?)",
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
  PdWeb_Stud_display: PdWeb_Stud_display,
  PdWeb_CA_display: PdWeb_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdWeb_verify: PdWeb_verify,
  PdWeb_delete: PdWeb_delete,
  PdWeb_edit: PdWeb_edit,
  PdWeb_Stud_insert: PdWeb_Stud_insert,
};
