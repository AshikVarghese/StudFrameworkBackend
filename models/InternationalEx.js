const connection = require("../config/dbconfig");

function InternationalEx_Stud(callback) {
  connection.query(
    "SELECT * from student_details where student_details.roll_no in (select distinct(international_exposure.roll_no) FROM  international_exposure inner join student_details on international_exposure.roll_no = student_details.roll_no where dept = ? and batch = ?) ",
    [params.dept, params.batch],
    (err, results, Details) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        return callback(results);
      }
    }
  );
}

function InternationalEx_Stud_hod(callback) {
  connection.query(
    "SELECT * from student_details where student_details.roll_no in (select distinct(international_exposure.roll_no) FROM  international_exposure inner join student_details on international_exposure.roll_no = student_details.roll_no where dept = ? ) ",
    [params.dept],
    (err, results, Details) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        return callback(results);
      }
    }
  );
}

function InternationalEx_Stud_official(callback) {
  connection.query(
    "SELECT * from student_details where student_details.roll_no in (select distinct(international_exposure.roll_no) FROM  international_exposure inner join student_details on international_exposure.roll_no = student_details.roll_no ) ",

    (err, results, Details) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        return callback(results);
      }
    }
  );
}

function InternationalEx_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `international_exposure` WHERE (roll_no = ?)",
    [params.Internexroll],
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

function InternationalEx_Stud_display_student(callback) {
  connection.query(
    "SELECT * FROM `international_exposure` WHERE (roll_no = ?)",
    [params.StudentDetails],
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

function InternationalEx_Stud_insert(callback) {
  connection.query(
    "INSERT INTO international_exposure(roll_no,foreign_campus,date,duration,project,outcome,personal_development,foreign_language_courses,verified,credits) VALUES(?,?,?,?,?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.Campus,
      params.DateYear,
      params.Duration,
      params.Project,
      params.Outcome,
      params.PersD,
      params.ForLCC,
      params.status,
      null
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

function InternationalEx_Stud_delete(callback) {
  connection.query(
    "DELETE FROM `international_exposure` WHERE (s_no = ?)",
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

function InternationalEx_Stud_edit(callback) {
  connection.query(
    "UPDATE `international_exposure` SET foreign_campus=?,duration=?,project=?,outcome=?,personal_development=?,foreign_language_courses=?,credits=? WHERE (s_no = ?)",
    [
      params.campusname,
      params.dateyear,
      params.project,
      params.outcome,
      params.personal,
      params.foreign,
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

function InternationalEx_Stud_verify(callback) {
  connection.query(
    "UPDATE `international_exposure` SET verify=? WHERE (s_no = ?)",
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

module.exports = {
  InternationalEx_Stud_verify: InternationalEx_Stud_verify,
  InternationalEx_Stud_delete: InternationalEx_Stud_delete,
  InternationalEx_Stud: InternationalEx_Stud,
  InternationalEx_Stud_hod: InternationalEx_Stud_hod,
  InternationalEx_Stud_official: InternationalEx_Stud_official,
  InternationalEx_Stud_display: InternationalEx_Stud_display,
  InternationalEx_Stud_insert: InternationalEx_Stud_insert,
  InternationalEx_Stud_display_student: InternationalEx_Stud_display_student,
  InternationalEx_Stud_edit: InternationalEx_Stud_edit,
};
