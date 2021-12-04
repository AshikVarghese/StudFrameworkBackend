const connection = require("../config/dbconfig");

function GenerateInternshipCharts(params, callback) {
  if (params.dept != null) {
    connection.query(
      "SELECT batch,count(*) as intern_count from student_details as stud inner join pd_internship as intern on stud.roll_no = intern.roll_no where stud.batch = ? group by stud.dept",
      [params.batch],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          return callback(results);
        }
      }
    );
  } else {
    connection.query(
      "SELECT batch,count(*) as intern_count from student_details as stud inner join pd_internship as intern on stud.roll_no = intern.roll_no group by stud.dept",
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          return callback(results);
        }
      }
    );
  }
}

function GeneratePlacementCharts(params, callback) {
  if (params.dept != null) {
    connection.query(
      "SELECT batch,count(*) as placement_count from student_details as stud inner join pd_placement as placement on stud.roll_no = placement.roll_no where stud.batch = ? group by stud.dep",
      [params.dept],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          return callback(results);
        }
      }
    );
  } else {
    connection.query(
      "SELECT batch,count(*) as intern_count from student_details as stud inner join pd_placement as place on stud.roll_no = place.roll_no group by stud.dept",
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          return callback(results);
        }
      }
    );
  }
}

module.exports = {
  GenerateInternshipCharts: GenerateInternshipCharts,
  GeneratePlacementCharts: GeneratePlacementCharts,
};
