/** @format */

const connection = require("../config/dbconfig");

function PdGuest_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_guest_lecture` inner join student_details on pd_guest_lecture.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function PdGuest_CA_display(callback) {
  connection.query(
    "SELECT * from pd_guest_lecture WHERE(roll_no=?)",
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
    "SELECT * FROM `pd_guest_lecture` WHERE(roll_no=?)",
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

function PdGuest_verify(callback) {
  connection.query(
    "UPDATE `pd_guest_lecture` SET verified=? WHERE (s_no = ?)",
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

function PdGuest_delete(callback) {
  connection.query(
    "DELETE FROM `pd_guest_lecture` WHERE (s_no = ?)",
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

function PdGuest_edit(callback) {
  connection.query(
    "UPDATE `pd_guest_lecture` SET topic = ?,resource_person = ?,outcome = ?, credits = ? WHERE (s_no = ?)",
    [
      params.topic,
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

function PdGuest_Stud_insert(callback) {
  connection.query(
    "INSERT INTO pd_guest_lecture(roll_no,topic,resource_person,outcome,verified) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Topic,
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
  PdGuest_Stud_display: PdGuest_Stud_display,
  PdGuest_CA_display: PdGuest_CA_display,
  ProfDevelop_Stud_display: ProfDevelop_Stud_display,
  PdGuest_verify: PdGuest_verify,
  PdGuest_delete: PdGuest_delete,
  PdGuest_edit: PdGuest_edit,
  PdGuest_Stud_insert: PdGuest_Stud_insert,
};
