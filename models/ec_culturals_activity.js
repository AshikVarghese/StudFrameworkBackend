const connection = require("../config/dbconfig");

function fetch_ec_culturals_activity(callback) {
  connection.query(
    "SELECT * FROM `ec_culturals` WHERE(roll_no=?)",
    [params.RollNumber],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      return callback(results);
    }
  );
}

function fetch_ec_culturals_activity_student(callback) {
  connection.query(
    "SELECT * FROM `ec_culturals` WHERE(roll_no=?)",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      return callback(results);
    }
  );
}

function insert_ec_culturals_activity(callback) {
  connection.query(
    "INSERT INTO ec_culturals(roll_no,event_name,date,position_secures,verified) VALUES (?,?,?,?,?)",
    [
      params.StudentDetails,
      params.eventname,
      params.eventdate,
      params.eventposition,
      params.status,
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

function ExtraCultural_delete(callback) {
  connection.query(
    "DELETE FROM `ec_culturals` WHERE (s_no = ?)",
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

function ExtraCultural_edit(callback) {
  connection.query(
    "UPDATE `ec_culturals` SET event_name = ?,date = ?,position_secures=?,credits=? WHERE (s_no = ?)",
    [
      params.culturalname,
      params.date,
      params.position,
      params.credits,
      params.columnid
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

function ExtraCultural_verify(callback) {
  connection.query(
    "UPDATE `ec_culturals` SET verified=? WHERE (s_no = ?)",
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


module.exports = {
  fetch_ec_culturals_activity: fetch_ec_culturals_activity,
  insert_ec_culturals_activity: insert_ec_culturals_activity,
  fetch_ec_culturals_activity_student: fetch_ec_culturals_activity_student,
  ExtraCultural_delete:ExtraCultural_delete,
  ExtraCultural_edit:ExtraCultural_edit,
  ExtraCultural_verify:ExtraCultural_verify
};
