var crypto = require("crypto");
const connection = require("../config/dbconfig");

function user_login(params, callback) {
  table = "student";
  connection.query(
    "SELECT `email`,`roll_no`,`auth_token`,`user_type`,`password`,`dept`,`batch` FROM `" +
      table +
      '`.`login_details` WHERE `email` = "' +
      params.email +
      '";',
    (err, details, fields) => {
      if (err) {
        return callback("user-fail");
      } else {
        if (details.length == 0) {
          return callback("user-fail");
        }

        var password = crypto
          .createHash("sha512")
          .update(params.password)
          .digest("hex");
        if (password === details[0].password) {
          var auth_token = crypto
            .createHash("sha512")
            .update(crypto.randomBytes(32).toString("hex"))
            .digest("hex");
          details[0].auth_token = auth_token;
          connection.query(
            "UPDATE  `" +
              table +
              '`.`login_details` SET `auth_token` = "' +
              auth_token +
              '" WHERE (`email`="' +
              params.email +
              '");',
            (err, results, fields) => {
              if (err) {
                return callback("server-down");
              } else {
                return callback(details);
              }
            }
          );
        } else {
          return callback("pass-fail");
        }
      }
    }
  );
}

function get_login_details(params, callback) {
  connection.query("SELECT `email`,`password`, `roll_no`, `dept`, `batch`, `user_type` FROM `login_details`",(err,results,fields)=>{
    if (err) {
      return callback("server-down");
    } else {
      return callback(results);
    }
  })
}

module.exports = { user_login: user_login, get_login_details:get_login_details };
