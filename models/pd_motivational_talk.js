/** @format */

const connection = require("../config/dbconfig");

function PdMotive_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_motivational_talk` inner join student_details on pd_motivational_talk.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdMotive_CA_display(callback) {
  connection.query(
    "SELECT * from pd_motivational_talk WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_motivational_talk` WHERE(roll_no=?)",
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

function PdMotive_verify(callback) {
  connection.query(
    "UPDATE `pd_motivational_talk` SET verified=? WHERE (s_no = ?)",
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

function PdMotive_delete(callback) {
  connection.query(
    "DELETE FROM `pd_motivational_talk` WHERE (s_no = ?)",
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

function PdMotive_edit(callback) {
  connection.query(
    "UPDATE `pd_motivational_talk` SET topic = ?,date= ?,resource_person = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.topic,
      params.date,
      params.resource_person,
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

function PdMotive_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_motivational_talk(roll_no,topic,date,resource_person,outcome) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Topic,
      params.DateYear,
      params.Resource,
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
  PdMotive_Stud_display: PdMotive_Stud_display,
  PdMotive_CA_display: PdMotive_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdMotive_verify: PdMotive_verify,
  PdMotive_delete: PdMotive_delete,
  PdMotive_edit: PdMotive_edit,
  PdMotive_Stud_insert: PdMotive_Stud_insert,
};
