const connection = require("../config/dbconfig");

// Internship Charts
function GenerateInternshipChartsHOD(params, callback) {
  if (params.dept != null) {
    connection.query(
      "SELECT batch,count(*) as intern_count from student_details as stud inner join pd_internship as intern on stud.roll_no = intern.roll_no where stud.dept = ? group by stud.batch",
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
      "SELECT dept,count(*) as intern_count from student_details as stud inner join pd_internship as intern on stud.roll_no = intern.roll_no group by stud.dept",
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

// Placement Charts
function GeneratePlacementChartsHOD(params, callback) {
  if (params.dept != null) {
    connection.query(
      "SELECT batch,count(*) as placement_count from student_details as stud inner join pd_placement as placement on stud.roll_no = placement.roll_no where stud.dept = ? group by stud.batch",
      [params.dept],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          // console.log(results);
          return callback(results);
        }
      }
    );
  } else {
    connection.query(
      "SELECT dept,count(*) as placement_count from student_details as stud inner join pd_placement as place on stud.roll_no = place.roll_no group by stud.dept",
      (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          return callback(results);
        }
      }
    );
  }
}

// Academics Charts
function GenerateAcademicsChartsHOD(params, callback) {
  if (params.batch != null) {
    connection.query(
      "SELECT * FROM INFORMATION_SCHEMA.COLUMNS where TABLE_NAME='academics'",
      (err, results, fields) => {
        if (err) {
          return callback(false);
        }
        // Fetching column names
        let columns = results.map((col) => col.COLUMN_NAME);

        // Getting the exam column names
        let exam_columns = columns.filter((column) => {
          if (column != "id" && column != "subj_id" && column != "roll_no") {
            return column;
          }
        });
        // Converting 2d array to single array
        let conditional = "SELECT subj_id,";

        // Generating the query
        for (let i = 0; i < exam_columns.length; i++) {
          conditional =
            conditional +
            " COUNT(IF(" +
            exam_columns[i].toString() +
            ">40,1,null)) as " +
            exam_columns[i].toString() +
            ",";
        }

        // Final query
        let query =
          conditional +
          "student_details.batch from academics inner join student_details on academics.roll_no = student_details.roll_no where student_details.dept = ? group by subj_id,student_details.batch;";

        connection.query(query, [params.dept], (err, results, fields) => {
          if (err) {
            console.log(err);
            return false;
            //   throw err;
          } else {
            return callback({ exams: exam_columns, results: results });
          }
        });
      }
    );
  }
}

// Academic Summary Charts
function GenerateAcademicSummaryChartsHOD(params, callback) {
  if (params.dept != null) {
    connection.query(
      "SELECT batch,CGPA,count(CGPA) as student_count from student_details as stud inner join academic_summary as academicsummary on stud.roll_no=academicsummary.roll_no where stud.dept= ?  group by CGPA,batch;",
      [params.dept],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          // console.log(results);

          let batches = Array.from(
            new Set(
              results.map((res) => {
                return res.batch;
              })
            )
          );
          return callback({ batches: batches, results: results });
        }
      }
    );
  }
}

module.exports = {
  GenerateInternshipChartsHOD: GenerateInternshipChartsHOD,
  GeneratePlacementChartsHOD: GeneratePlacementChartsHOD,
  GenerateAcademicsChartsHOD: GenerateAcademicsChartsHOD,
  GenerateAcademicSummaryChartsHOD: GenerateAcademicSummaryChartsHOD,
};
