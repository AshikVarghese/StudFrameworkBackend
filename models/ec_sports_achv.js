const connection = require("../config/dbconfig");

function fetch_ec_sports_achv(callback) {
  connection.query(
    "SELECT * FROM `ec_sports` WHERE(roll_no=?)",
    [params.RollNumber],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      return callback(results);
    }
  );
}

function fetch_ec_sports_achv_student(callback) {
  connection.query(
    "SELECT * FROM `ec_sports` WHERE(roll_no=?)",
    [params.StudentDetails],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      return callback(results);
    }
  );
}

function insert_ec_sports_achv(callback) {
  connection.query(
    "INSERT INTO ec_sports(roll_no,sport_name,representation,date,position_secures,verified) VALUES (?,?,?,?,?,?)",
    [
      params.StudentDetails,
      params.sportname,
      params.representation,
      params.dateyear,
      params.position,
      params.status,
    ],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback("NotInserted");
      } else {
        return callback("Inserted");
      }
    }
  );
}

function ExtraSport_delete(callback) {
  connection.query(
    "DELETE FROM `ec_sports` WHERE (s_no = ?)",
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

function ExtraSport_edit(callback) {
  connection.query(
    "UPDATE `ec_sports` SET sport_name = ?,representation = ?,position_secures=?,date=?, credits=? WHERE (s_no = ?)",
    [
      params.sportname,
      params.representation,
      params.position,
      params.date,
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

function ExtraSport_verify(callback) {
  connection.query(
    "UPDATE `ec_sports` SET verified=? WHERE (s_no = ?)",
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
  fetch_ec_sports_achv: fetch_ec_sports_achv,
  fetch_ec_sports_achv_student: fetch_ec_sports_achv_student,
  insert_ec_sports_achv: insert_ec_sports_achv,
  ExtraSport_delete:ExtraSport_delete,
  ExtraSport_edit:ExtraSport_edit,
  ExtraSport_verify:ExtraSport_verify
};
