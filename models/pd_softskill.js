/** @format */

const connection = require("../config/dbconfig");

function sskill_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `pd_soft_skill` inner join student_details on pd_soft_skill.roll_no = student_details.roll_no WHERE(student_details.roll_no=?)",
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

function get_soft_skill(callback) {
  connection.query(
    "SELECT * from `pd_soft_skill` WHERE(roll_no=?)",
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

function edit_soft_skill(callback) {
  connection.query(
    "UPDATE `pd_soft_skill` SET skill=?, trainer = ?, date = ?, remarks = ?, credits = ? WHERE (s_no = ?)",
    [
      params.skill,
      params.trainer,
      params.date,
      params.remarks,
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

function delete_soft_skill(callback) {
  connection.query(
    "DELETE FROM `pd_soft_skill` WHERE (s_no = ?)",
    [params.columnid],
    (err, results, fields) => {
      if (err) {
        return callback("Delete Failed");
      } else {
        return callback("Delete Success");
      }
    }
  );
}

module.exports = {
  sskill_Stud_display: sskill_Stud_display,
  edit_soft_skill: edit_soft_skill,
  delete_soft_skill: delete_soft_skill,
  get_soft_skill: get_soft_skill,
};
