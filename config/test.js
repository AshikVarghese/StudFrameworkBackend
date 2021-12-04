const connection = require("./dbconfig");

function get_testing(params, callback) {
  connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}

connection.end();

module.exports(get_testing);
