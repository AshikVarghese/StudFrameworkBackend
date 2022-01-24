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
      "SELECT batch,count(*) as placement_count from student_details as stud inner join pd_placement as placement on stud.roll_no = placement.roll_no where stud.dept = ? group by stud.dept",
      [params.dept],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          //   throw err;
        } else {
          console.log(results);
          return callback(results);
        }
      }
    );
  } else {
    connection.query(
      "SELECT batch,count(*) as placement_count from student_details as stud inner join pd_placement as place on stud.roll_no = place.roll_no group by stud.dept",
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
function GenerateAcademicsCharts(params, callback) {
    if (params.dept != null) {
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
  
          // Repeating the exam column twice for question marks in exam
          exam_columns = exam_columns.map((column) => {
            return [column, column];
          });
  
          // Converting 2d array to single array
          exam_columns = [].concat(...exam_columns);
          exam_columns.push(params.dept);
          let conditional ='SELECT ';
          // Generating the query
          conditional = conditional+"COUNT(IF(?>40,1,null)) as ?,".repeat(
            (exam_columns.length/2)-1
          );
  
          // Final query
          let query =
            conditional +
            "COUNT(IF(?>40,1,null)) as ?,student_details.batch from academics inner join student_details on academics.roll_no = student_details.roll_no where student_details.dept = ? group by subj_id,student_details.batch";
  
          console.log(query)
          connection.query(query, exam_columns, (err, results, fields) => {
            if (err) {
              console.log(err);
              //   throw err;
            } else {
              return callback(results);
            }
          });
        }
      );
    } else {
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
  
          // Repeating the exam column twice for question marks in exam
          exam_columns = exam_columns.map((column) => {
            return [column, column];
          });
  
          // Converting 2d array to single array
          exam_columns = [].concat(...exam_columns);
          exam_columns.push(params.dept);
  
          let conditional = 'SELECT subj_id '
          // Generating the query
          conditional = conditional+ "COUNT(IF(?>40,1,null)) as ?,".repeat(
            exam_columns.length - 1
          );
  
          // Final query
          let query =
            conditional +
            "COUNT(IF(?>40,1,null)) as ?,student_details.batch from academics inner join student_details on academics.roll_no = student_details.roll_no group by subj_id,student_details.batch";
  
          connection.query(query, exam_columns, (err, results, fields) => {
            if (err) {
              console.log(err);
              //   throw err;
            } else {
              return callback(results);
            }
          });
        }
      );
    }
  }

function GenerateAcademicSummaryCharts(params, callback) {
    if (params.dept != null) {
      connection.query(
        "SELECT batch,CGPA,count(CGPA) as student_count from student_details as stud inner join academic_summary as academicsummary on stud.roll_no=academicsummary.roll_no where stud.dept= ? and stud.batch='2019-2023' group by CGPA;", 
        [params.dept],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            //   throw err;
          } else {
            console.log(results);
            return callback(results);
          }
        }
      );
    }
  }


module.exports = {
  GenerateInternshipCharts: GenerateInternshipCharts,
  GeneratePlacementCharts: GeneratePlacementCharts,
  GenerateAcademicsCharts: GenerateAcademicsCharts,
  GenerateAcademicSummaryCharts:GenerateAcademicSummaryCharts,
};
