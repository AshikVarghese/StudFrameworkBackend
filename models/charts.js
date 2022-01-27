const connection = require("../config/dbconfig");

// HOD CHARTS

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

// Academics Charts - HOD
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
        let temp_json = {};
        connection.query(query, [params.dept], (err, results, fields) => {
          if (err) {
            console.log(err);
            return false;
            //   throw err;
          } else {
            let batches = results.map((res) => res.batch);
            for (let inx in batches) {
              temp_json[batches[inx]] = [];
            }

            for (var i = 0; i < results.length; i++) {
              let marks_arr = [];
              let exam_json = {};
              for (let exam in exam_columns) {
                marks_arr.push(parseInt(results[i][exam_columns[exam]]));
              }
              exam_json["name"] = results[i].subj_id;
              exam_json["data"] = marks_arr;
              temp_json[results[i].batch].push(exam_json);
            }
            console.log(temp_json);
          }
          return callback({
            exams: exam_columns,
            batched_result: temp_json,
          });
        });
      }
    );
  }
}

// Academic Summary Charts
function GenerateAcademicSummaryChartsHOD(params, callback) {
  connection.query(
    "SELECT batch,CGPA,count(CGPA) as student_count from student_details as stud inner join academic_summary as academicsummary on stud.roll_no=academicsummary.roll_no where stud.dept= ?  group by CGPA,batch;",
    [params.dept],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        let batches = Array.from(
          new Set(
            results.map((res) => {
              return res.batch;
            })
          )
        );
        let temp_json = {};
        for (let i = 0; i < batches.length; i++) {
          temp_json[batches[i]] = {};
        }
        for (let i = 0; i < results.length; i++) {
          temp_json[results[i]["batch"]][results[i]["CGPA"]] =
            results[i]["student_count"];
        }
        return callback({ batches: batches, results: temp_json });
      }
    }
  );
}

// Class Advisor CHARTS

function GenerateInternshipChartsCA(params, callback) {
  connection.query(
    "SELECT batch,count(*) as intern_count from student_details as stud inner join pd_internship as intern on stud.roll_no = intern.roll_no where stud.dept = ? and stud.batch=? group by stud.batch",
    [params.dept, params.batch],
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

// Placement Charts
function GeneratePlacementChartsCA(params, callback) {
  connection.query(
    "SELECT batch,count(*) as placement_count from student_details as stud inner join pd_placement as placement on stud.roll_no = placement.roll_no where stud.dept = ? and stud.batch=? group by stud.batch",
    [params.dept, params.batch],
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
}

// Academics Charts - CA
function GenerateAcademicsChartsCA(params, callback) {
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
        "student_details.batch from academics inner join student_details on academics.roll_no = student_details.roll_no where student_details.dept = ? and student_details.batch = ? group by subj_id";
      let temp_json = {};
      connection.query(
        query,
        [params.dept, params.batch],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            return false;
            //   throw err;
          } else {
            let batches = results.map((res) => res.batch);
            for (let inx in batches) {
              temp_json[batches[inx]] = [];
            }

            for (var i = 0; i < results.length; i++) {
              let marks_arr = [];
              let exam_json = {};
              for (let exam in exam_columns) {
                marks_arr.push(parseInt(results[i][exam_columns[exam]]));
              }
              exam_json["name"] = results[i].subj_id;
              exam_json["data"] = marks_arr;
              temp_json[results[i].batch].push(exam_json);
            }
            console.log(temp_json);
          }
          return callback({
            exams: exam_columns,
            batched_result: temp_json,
          });
        }
      );
    }
  );
}

// Academic Summary Charts
function GenerateAcademicSummaryChartsCA(params, callback) {
  connection.query(
    "SELECT batch,CGPA,count(CGPA) as student_count from student_details as stud inner join academic_summary as academicsummary on stud.roll_no=academicsummary.roll_no where stud.dept= ? and stud.batch=?  group by CGPA,batch;",
    [params.dept, params.batch],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        let batches = Array.from(
          new Set(
            results.map((res) => {
              return res.batch;
            })
          )
        );
        let temp_json = {};
        for (let i = 0; i < batches.length; i++) {
          temp_json[batches[i]] = {};
        }
        for (let i = 0; i < results.length; i++) {
          temp_json[results[i]["batch"]][results[i]["CGPA"]] =
            results[i]["student_count"];
        }
        return callback({ batches: batches, results: temp_json });
      }
    }
  );
}

// Official Charts
function GenerateInternshipChartsOfficial(callback) {
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

// Placement Charts
function GeneratePlacementChartsOfficial(callback) {
  connection.query(
    "SELECT dept,count(*) as placement_count from student_details as stud inner join pd_placement as placement on stud.roll_no = placement.roll_no group by stud.dept",
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
}
module.exports = {
  GenerateInternshipChartsOfficial: GenerateInternshipChartsOfficial,
  GeneratePlacementChartsOfficial: GeneratePlacementChartsOfficial,
  GenerateInternshipChartsHOD: GenerateInternshipChartsHOD,
  GeneratePlacementChartsHOD: GeneratePlacementChartsHOD,
  GenerateAcademicsChartsHOD: GenerateAcademicsChartsHOD,
  GenerateAcademicsChartsCA: GenerateAcademicsChartsCA,
  GenerateAcademicSummaryChartsHOD: GenerateAcademicSummaryChartsHOD,
  GenerateAcademicSummaryChartsCA: GenerateAcademicSummaryChartsCA,
  GenerateInternshipChartsCA: GenerateInternshipChartsCA,
  GeneratePlacementChartsCA: GeneratePlacementChartsCA,
};
