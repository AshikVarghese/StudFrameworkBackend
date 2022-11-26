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
        return callback(results);
      }
    }
  );
}
function GenerateCreditsChartCA(callback) {
  connection.query(
    "SELECT sum(credits) as credits_sum,student_details.batch from (select pd_workshops.credits,pd_workshops.roll_no from pd_workshops union all select pd_webinar.credits,pd_webinar.roll_no from pd_webinar union all select pd_courses.credits,pd_courses.roll_no from pd_courses union all select pd_final_project.credits,pd_final_project.roll_no from pd_final_project union all select pd_guest_lecture.credits,pd_guest_lecture.roll_no from pd_guest_lecture union all select pd_webinar.credits,pd_webinar.roll_no from pd_webinar union all select pd_industrial_visit.credits,pd_industrial_visit.roll_no from pd_industrial_visit union all select pd_inplant_training.credits,pd_inplant_training.roll_no from pd_inplant_training union all select pd_mini_project.credits,pd_mini_project.roll_no from pd_mini_project union all select pd_motivational_talk.credits,pd_motivational_talk.roll_no from pd_motivational_talk union all select pd_placement.credits,pd_placement.roll_no from pd_placement union all select pd_publications.credits,pd_publications.roll_no from pd_publications) as t1 inner join student_details on t1.roll_no = student_details.roll_no where student_details.dept = ? GROUP by student_details.batch;",
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
}

function GenerateCreditsChartHOD(callback) {
  connection.query(
    "SELECT sum(credits) as credits_sum,student_details.batch from (select pd_workshops.credits,pd_workshops.roll_no from pd_workshops union all select pd_webinar.credits,pd_webinar.roll_no from pd_webinar union all select pd_courses.credits,pd_courses.roll_no from pd_courses union all select pd_final_project.credits,pd_final_project.roll_no from pd_final_project union all select pd_guest_lecture.credits,pd_guest_lecture.roll_no from pd_guest_lecture union all select pd_webinar.credits,pd_webinar.roll_no from pd_webinar union all select pd_industrial_visit.credits,pd_industrial_visit.roll_no from pd_industrial_visit union all select pd_inplant_training.credits,pd_inplant_training.roll_no from pd_inplant_training union all select pd_mini_project.credits,pd_mini_project.roll_no from pd_mini_project union all select pd_motivational_talk.credits,pd_motivational_talk.roll_no from pd_motivational_talk union all select pd_placement.credits,pd_placement.roll_no from pd_placement union all select pd_publications.credits,pd_publications.roll_no from pd_publications) as t1 inner join student_details on t1.roll_no = student_details.roll_no where student_details.dept = ? GROUP by student_details.batch;",
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
}

// Credits Table
function credits_dataCA(params, callback) {
  connection.query(
    "select count(*) as total,verified,batch from (select pd_workshops.roll_no,pd_workshops.credits,pd_workshops.verified from pd_workshops union all select pd_webinar.roll_no,pd_webinar.credits,pd_webinar.verified from pd_webinar union all select pd_competitions.roll_no,pd_competitions.credits,pd_competitions.verified from pd_competitions UNION all select pd_courses.roll_no,pd_courses.credits,pd_courses.verified from pd_courses UNION ALL SELECT pd_final_project.roll_no,pd_final_project.credits,pd_final_project.verified from pd_final_project) as t1 inner join student_details on student_details.roll_no = t1.roll_no where student_details.dept=? and verified='Verified' group by batch;",
    [params.dept],
    (err, results_verified, fields) => {
      if (err) {
        console.log(err);
        return callback(false);
      } else {
        connection.query(
          "select count(*) as total,verified,batch from (select pd_workshops.roll_no,pd_workshops.credits,pd_workshops.verified from pd_workshops union all select pd_webinar.roll_no,pd_webinar.credits,pd_webinar.verified from pd_webinar union all select pd_competitions.roll_no,pd_competitions.credits,pd_competitions.verified from pd_competitions UNION all select pd_courses.roll_no,pd_courses.credits,pd_courses.verified from pd_courses UNION ALL SELECT pd_final_project.roll_no,pd_final_project.credits,pd_final_project.verified from pd_final_project) as t1 inner join student_details on student_details.roll_no = t1.roll_no where student_details.dept=? and verified='Pending' group by batch;",
          [params.dept],
          (err, results_pending, fields) => {
            return callback([results_verified, results_pending]);
          }
        );
      }
    }
  );
}

// Credits Table Officials
function credits_data_Officials(params, callback) {
  connection.query(
    "select count(*) as total,dept from (select pd_workshops.roll_no,pd_workshops.credits,pd_workshops.verified from pd_workshops union all select pd_webinar.roll_no,pd_webinar.credits,pd_webinar.verified from pd_webinar union all select pd_competitions.roll_no,pd_competitions.credits,pd_competitions.verified from pd_competitions UNION all select pd_courses.roll_no,pd_courses.credits,pd_courses.verified from pd_courses UNION ALL SELECT pd_final_project.roll_no,pd_final_project.credits,pd_final_project.verified from pd_final_project) as t1 inner join student_details on student_details.roll_no = t1.roll_no where verified='Verified' group by dept",
    [params.dept],
    (err, results_verified, fields) => {
      if (err) {
        console.log(err);
        return callback(false);
      } else {
        connection.query(
          "select count(*) as total,dept from (select pd_workshops.roll_no,pd_workshops.credits,pd_workshops.verified from pd_workshops union all select pd_webinar.roll_no,pd_webinar.credits,pd_webinar.verified from pd_webinar union all select pd_competitions.roll_no,pd_competitions.credits,pd_competitions.verified from pd_competitions UNION all select pd_courses.roll_no,pd_courses.credits,pd_courses.verified from pd_courses UNION ALL SELECT pd_final_project.roll_no,pd_final_project.credits,pd_final_project.verified from pd_final_project) as t1 inner join student_details on student_details.roll_no = t1.roll_no where verified='Pending' group by dept",
          [params.dept],
          (err, results_pending, fields) => {
            return callback([results_verified, results_pending]);
          }
        );
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
  GenerateCreditsChartCA: GenerateCreditsChartCA,
  GenerateCreditsChartHOD: GenerateCreditsChartHOD,
  credits_dataCA: credits_dataCA,
  credits_data_Officials: credits_data_Officials,
};
