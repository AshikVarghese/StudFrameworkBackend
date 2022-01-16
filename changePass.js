import { generate_password_hashed } from "./config/hashconfig";
const connection = require("../config/dbconfig");

function change_pass(params, callback) {
  connection.query(
    "SELECT `email`,`auth_token`,`password` FROM `student'`.`login_details` WHERE `email` = '" +
      params.email +
      "';",
    (err, details, fields) => {
      if (err) {
        return callback("pass-fail");
      } else {
        if (params.auth_token == details[0].auth_token) {
          var old_pass = generate_password_hashed(params.old_pass);
          var new_pass = generate_password_hashed(params.new_pass);
          console.log(old_pass === details[0].password);
          if (old_pass === details[0].password) {
            connection.query(
              'UPDATE  `student`.`login_details` SET `password` = "' +
                new_pass +
                ' WHERE (`email`= "' +
                params.email +
                '");',
              (err, results, fields) => {
                if (err) {
                  return callback("server-fail");
                } else {
                  return callback(results);
                }
              }
            );
          } else {
            return callback("pass-fail");
          }
        } else {
          return callback("pass-fail");
        }
      }
    }
  );
}
module.exports = { change_pass: change_pass };
