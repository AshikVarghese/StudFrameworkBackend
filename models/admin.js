var crypto = require("crypto");
const connection = require("../config/dbconfig");

function insert_login_cred(params, callback) {
    var email = params.email;
    var password = "licet@123";
    var hash_password = crypto.createHash("sha512").update(password).digest("hex");
    var auth_token = null;
    var roll_no = params.roll_no;
    var dept = params.dept;
    var batch = params.batch;
    var user_type = params.user_type;
    connection.query(
        "INSERT INTO `login_details`(email,password,auth_token,roll_no,dept,batch,user_type) VALUES(?,?,?,?,?,?,?)",
        [
        email,
        hash_password,
        auth_token,
        roll_no,
        dept,
        batch,
        user_type
        ],
        (err, results, fields) => {
          if (err) {
            return callback("Creating user failed. Please try again.");
          }
          return callback("Created Successfully");
        }
      );
}

function remove_cred(params, callback) {
    var email = params.email;
    connection.query(
        "DELETE FROM `login_details` WHERE (email = ?)",
        [email],
        (err, results, fields) => {
          if (err) {
            return callback("server-down");
          } else {
            return callback("removed");
          }
        }
    );
}

function edit_cred(params, callback) {
    var email = params.email;
    var password = params.password;
    var roll_no = params.roll_no;
    var dept = params.dept;
    var batch = params.batch;
    var user_type = params.user_type;
    connection.query(
        "SELECT `password` FROM `login_details` WHERE `email` = ?",[email],(error, results, fields) => {
          if(error){
            return callback("server-down");
          }
          else if (password == results[0].password) {
            connection.query(
                "UPDATE `login_details` SET `roll_no` = ?, `dept` = ?, `batch` = ?, `user_type` = ?  WHERE (email = ?)",
                [
                roll_no,
                dept,
                batch,
                user_type,
                email
                ],
                (err, details, fields) => {
                  if (err) {
                    return callback("server-down");
                  } else {
                    return callback("edited");
                  }
                }
            );
          } else {
            var hash_password = crypto.createHash("sha512").update(password).digest("hex");
            connection.query(
                "UPDATE `login_details` SET `password` = ?, `roll_no` = ?, `dept` = ?, `batch` = ?, `user_type` = ?  WHERE (email = ?)",
                [
                hash_password,
                roll_no,
                dept,
                batch,
                user_type,
                email
                ],
                (err, details, fields) => {
                  if (err) {
                    return callback("server-down");
                  } else {
                    return callback("edited");
                  }
                }
            );
          }
        }
    );
}

module.exports = {
    insert_login_cred : insert_login_cred,
    remove_cred : remove_cred,
    edit_cred : edit_cred
};
