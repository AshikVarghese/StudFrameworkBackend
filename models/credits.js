const connection = require("../config/dbconfig");

function create_new_record(params, callback) {
  connection.query(
    "INSERT INTO licet_credits(roll_no) values (?)",
    [params.roll_no],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        return true;
      }
    }
  );
}

function insert_values(params, callback) {
  let count = Object.values(params).length - 1;
  let values = Object.values(params);
  let keys = Object.keys(params);

  //generate question marks
  let query = "UPDATE student_credits SET ";
  for (let inx = 1; inx < count - 1; inx++) {
    query = query + keys[inx] + "=" + values[inx] + ",";
  }
  query =
    query +
    keys[count - 1] +
    "=" +
    values[count - 1] +
    " where roll_no = " +
    values[0];

  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      console.log("updated");
      callback(true);
    }
  });
}

module.exports = {
  create_new_record: create_new_record,
  insert_values: insert_values,
};
