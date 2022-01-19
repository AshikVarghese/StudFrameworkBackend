/** @format */

const connection = require("../config/dbconfig");
const store = require("store");
function ec(params, callback) {
  club(params, (result) => {
    if (!result) {
      console.log("error");
    } else {
      var arr = [];
      arr.push(result);
      store.set("endresult", arr);
      outreach(params, (result) => {
        if (!result) {
          console.log("error");
        } else {
          arr = store.get("endresult");
          arr.push(result);
          store.set("endresult", arr);
          sports(params, (result) => {
            if (!result) {
              console.log("error");
            } else {
              arr = store.get("endresult");
              arr.push(result);
              store.set("endresult", arr);
              cultural(params, (result) => {
                if (!result) {
                  console.log("error");
                } else {
                  arr = store.get("endresult");
                  arr.push(result);
                  store.set("endresult", arr);
                  return callback(store.get("endresult"));
                }
              });
            }
          });
        }
      });
    }
  });
}

function club(params, callback) {
  connection.query(
    "SELECT * FROM ec_club_activity WHERE roll_no = ?",
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

function cultural(params, callback) {
  connection.query(
    "SELECT * FROM ec_culturals WHERE roll_no = ?",
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

function outreach(params, callback) {
  connection.query(
    "SELECT * FROM ec_outreach WHERE roll_no = ?",
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

function sports(params, callback) {
  connection.query(
    "SELECT * FROM ec_sports WHERE roll_no = ?",
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

module.exports = {
  ec: ec,
};
