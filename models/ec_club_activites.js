const concurrently = require("concurrently");
const { param } = require("express-validator");
const connection = require("../config/dbconfig");

function ExtracurricularCA_display(params, callback) {
  if (params.batch != "None") {
    connection.query(
      "SELECT * from student_details where (student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_club_activity) or student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_culturals) or student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_outreach) or student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_sports)) and dept=? and batch=?;",
      [params.dept, params.batch],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return callback(false);
        } else {
          return callback(results);
        }
      }
    );
  } else {
    connection.query(
      "SELECT * from student_details where (student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_club_activity) or student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_culturals) or student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_outreach) or student_details.roll_no in (SELECT DISTINCT(roll_no) from ec_sports)) and dept=?;",
      [params.dept],
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
}

function ExtraClub_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `ec_club_activity` WHERE(roll_no=?)",
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

function ExtraClub_CA_display(callback) {
  connection.query(
    "SELECT * from ec_club_activity WHERE(roll_no=?)",
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

function ExtraCurricular_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `ec_club_activity` WHERE(roll_no=?)",
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

function ExtraClub_verify(callback) {
  connection.query(
    "UPDATE `ec_club_activity` SET verified=? WHERE (s_no = ?)",
    [params.verify, params.columnid],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback("Verification failed");
      } else {
        return callback("Verified Successfully");
      }
    }
  );
}

function ExtraClub_delete(callback) {
  connection.query(
    "DELETE FROM `ec_club_activity` WHERE (s_no = ?)",
    [params.columnid],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback("Delete failed");
      } else {
        return callback("Deleted Successfully");
      }
    }
  );
}

function ExtraClub_edit(callback) {
  connection.query(
    "UPDATE `ec_club_activity` SET club_name = ?,activity_name = ?,date=?,outcome=?, credits=? WHERE (s_no = ?)",
    [
      params.clubname,
      params.activity,
      params.date,
      params.outcome,
      params.credits,
      params.columnid,
    ],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback("Edit failed");
      } else {
        return callback("Edited Successfully");
      }
    }
  );
}

function ExtraClub_Stud_insert(callback) {
  connection.query(
    "INSERT INTO ec_club_activity(roll_no,club_name,activity_name,date,outcome,verified) VALUES(?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Clubname,
      params.ClubactivityID,
      params.Clubdateyear,
      params.Clubnoutcome,
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
  ExtraClub_Stud_insert: ExtraClub_Stud_insert,
  ExtraClub_Stud_display: ExtraClub_Stud_display,
  ExtracurricularCA_display: ExtracurricularCA_display,
  ExtraCurricular_Stud_display: ExtraCurricular_Stud_display,
  ExtraClub_CA_display: ExtraClub_CA_display,
  ExtraClub_verify: ExtraClub_verify,
  ExtraClub_delete: ExtraClub_delete,
  ExtraClub_edit: ExtraClub_edit,
};
