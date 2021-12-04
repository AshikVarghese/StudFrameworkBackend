const concurrently = require("concurrently");
const connection = require("../config/dbconfig");

function ExtracurricularCA_display(params, callback) {
  connection.query(
    "SELECT * from student_details where roll_no in (SELECT DISTINCT(e_a.roll_no) from ec_club_activity as e_a inner join ec_culturals as e_c_a on e_a.roll_no = e_c_a.roll_no inner join ec_outreach as e_o_a on e_c_a.roll_no = e_o_a.roll_no inner join ec_sports on ec_sports.roll_no = e_o_a.roll_no) and dept=? and batch=?",
    [params.dept, params.batch],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      } else {
        return callback(results);
      }
    }
  );
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
        return callback(false);
      } else {
        return callback(results);
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
        return callback(false);
      } else {
        return callback(results);
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
        return callback(false);
      } else {
        return callback(results);
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
