const connection = require("../config/dbconfig");

function ExtraOutreach_Stud_display(callback) {
  connection.query(
    "SELECT * FROM `ec_outreach` WHERE (roll_no = ?)",
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

function ExtraOutreach_CA_display(callback) {
  connection.query(
    "SELECT * FROM `ec_outreach` WHERE (roll_no = ?)",
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

function ExtraOutreach_CA_display(callback) {
  connection.query(
    "SELECT * from ec_outreach WHERE(roll_no=?)",
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

function ExtraOutreach_verify(callback) {
  connection.query(
    "UPDATE `ec_outreach` SET outreach_verified=? WHERE (s_no = ?)",
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

function ExtraOutreach_delete(callback) {
  connection.query(
    "DELETE FROM `ec_outreach` WHERE (s_no = ?)",
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

function ExtraOutreach_edit(callback) {
  connection.query(
    "UPDATE `ec_outreach` SET outreach_activity_name = ?,outreach_date = ?,outreach_outcome=?, credits=? WHERE (s_no = ?)",
    [
      params.outreachname,
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

function ExtraOutreach_Stud_insert(callback) {
  connection.query(
    "INSERT INTO ec_outreach(roll_no,outreach_activity_name,outreach_date,outreach_outcome,outreach_verified) VALUES(?,?,?,?,?)",
    [
      params.StudentDetails,
      params.outreachname,
      params.outreachdateyear,
      params.outreachoutcome,
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

module.exports = {
  ExtraOutreach_Stud_insert: ExtraOutreach_Stud_insert,
  ExtraOutreach_Stud_display: ExtraOutreach_Stud_display,
  ExtraOutreach_CA_display: ExtraOutreach_CA_display,
  ExtraOutreach_verify: ExtraOutreach_verify,
  ExtraOutreach_delete: ExtraOutreach_delete,
  ExtraOutreach_edit: ExtraOutreach_edit,
};
