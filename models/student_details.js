/** @format */

const { param } = require("express-validator");
const connection = require("../config/dbconfig");

// Fetch Student Details
function fetch_student_details(params, callback) {
  connection.query(
    "SELECT * FROM student_details WHERE(roll_no = ?)",
    [params.RollNumber],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback(false);
      }
      return callback(results);
    }
  );
}

// Fetch All Student Details
function fetch_students_details(callback) {
  connection.query(
    "SELECT * FROM `student`.`student_details` WHERE dept=? AND batch = ?",
    [params.dept, params.batch],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}

// Fetch All Student Details
function fetch_students_details_pd(params, callback) {
  if (params.batch != "None") {
    connection.query(
      "SELECT * from student_details where (student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_competitions) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_courses) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_final_project) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_guest_lecture) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_industrial_visit) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_inplant_training) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_internship) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_mini_project) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_motivational_talk) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_placement) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_publications) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_webinar) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_workshops)) and dept=? and batch=?;",
      [params.dept, params.batch],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return callback(false);
        }
        console.log(results.length);
        return callback(results);
      }
    );
  } else {
    connection.query(
      "SELECT * from student_details where (student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_competitions) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_courses) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_final_project) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_guest_lecture) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_industrial_visit) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_inplant_training) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_internship) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_mini_project) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_motivational_talk) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_placement) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_publications) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_webinar) or student_details.roll_no in (SELECT DISTINCT(roll_no) from pd_workshops)) and dept=?;",
      [params.dept],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return callback(false);
        }
        console.log(results.length);
        return callback(results);
      }
    );
  }
}

function fetch_students_details_hod(callback) {
  connection.query(
    "SELECT * FROM `student`.`student_details` WHERE (dept = ?)",
    [params.department],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}
function fetch_students_details_official(callback) {
  connection.query(
    "SELECT * FROM `student`.`student_details`",
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}
function fetch_students_details_official_department(callback) {
  connection.query(
    "SELECT * FROM `student`.`student_details` GROUP BY `dept` ",
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(results);
    }
  );
}

function insert_student_details(params, callback) {
  connection.query(
    "INSERT INTO `student`.`student_details` ('B.reg_no', 'B.sname','B.aadhar_no' ,'B.email','B.batch','B.dept','B.quota','B.gender','B.dob','B.father_name','B.mother_name','B.father_mob_no','B.mother_mob_no','B.religion','B.address',' password' ) VALUES (`" +
      params.reg_no +
      "`, `" +
      params.sname +
      "`, `" +
      params.aadhar_no +
      "`, `" +
      params.email +
      "`, `" +
      params.batch +
      "`, `" +
      params.dept +
      "`, `" +
      params.quota +
      "`, `" +
      params.gender +
      "`, `" +
      params.dob +
      "`, `" +
      params.father_name +
      "`, `" +
      params.mother_name +
      "`, `" +
      params.father_mob_no +
      "`, `" +
      params.mother_mob_no +
      "`, `" +
      params.religion +
      "`, `" +
      params.address +
      "`, `" +
      params.password +
      "`, `0`)",
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback("success");
    }
  );
}

// Edit Student details

function edit_student_details(params, callback) {
  connection.query(
    "UPDATE student_details SET reg_no=?,sname=?,aadhar_no=?,email=?,batch=?,dept=?,quota=?,gender=?,dob=?,nationality=?,contact_no=?,father_name=?,mother_name=?,father_mob_no=?,mother_mob_no=?,community=?,religion=?,if_catholic_parish=?,dalit_catholic_yn=?,present_address=?,permanent_address=?,blood_group=?,mother_tongue=?,lang_know=?,pan=?,father_qualification=?,mother_qualification=?,father_occupation=?,mother_occupation=?,father_office_address=?,mother_office_address=?,father_annual_income=?,mother_annual_income=?,father_email=?,mother_email=?,guardian_name=?,guardian_qualification=?,guardian_occupation=?,guardian_office_address=?,guardian_annual_income=?,guardian_mob_no=?,guardian_email=?,no_of_siblings=?,name_siblings=?,qualification_siblings=?,occupation_siblings=?,alumni_licet_loyola_yn=?,application_no=?,date_of_ad=?,regular_lateral_rl=?,dayschl_hosteller_dh=?,scholarship_name=?,scholarship_amount=?,first_graduate_yn=?,eco_backward_yn=?,programming_languages=?,software_proficiency=?,dept_rel_proficiency=?,certifications=?,other_skills=?,aptitude_analytical_skills=?,communication_skills=?,social_media_exposure=?,leadership_skills=?,other_interpersonal_skills=?,short_term_goal=?,long_term_goal=?,membership_name=?,membership_no=?,membership_duration=?,hse_school_name=?,hse_board=?,hse_medium=?,hse_sec_lang=?,hse_group=?,hse_marks=?,hse_percentage=?,hse_cutoff=?,hse_attempts=?,sslc_school_name=?,sslc_board=?,sslc_medium=?,sslc_sec_lang=?,sslc_marks=?,sslc_percentage=?,sslc_attempts=? WHERE roll_no = ?",
    [
      params.registerno,
      params.name,
      params.aadhar,
      params.peremail,
      params.bat,
      params.dep,
      params.qta,
      params.sex,
      params.dateofbirth,
      params.nationality,
      params.contact,
      params.fana,
      params.mname,
      params.fano,
      params.mno,
      params.community,
      params.religion,
      params.parish,
      params.dalit,
      params.preaddr,
      params.peraddr,
      params.bloodgroup,
      params.mothertongue,
      params.langknow,
      params.pano,
      params.faq,
      params.mqua,
      params.faocc,
      params.moocc,
      params.faoff,
      params.moff,
      params.fainc,
      params.minc,
      params.famail,
      params.memail,
      params.gname,
      params.gqua,
      params.gocc,
      params.goff,
      params.ginc,
      params.gmob,
      params.gamail,
      params.nsib,
      params.nmsib,
      params.qsib,
      params.siboc,
      params.llalumni,
      params.apno,
      params.doad,
      params.regla,
      params.dayho,
      params.scname,
      params.scamt,
      params.firstgra,
      params.ecoback,
      params.proglan,
      params.sopro,
      params.deprel,
      params.cer,
      params.ots,
      params.aptana,
      params.cskill,
      params.sox,
      params.lskill,
      params.oskill,
      params.sgoal,
      params.lgoal,
      params.membn,
      params.membnum,
      params.memd,

      params.hsenos,
      params.hsebod,
      params.hsemoi,
      params.hsesl,
      params.hsegro,
      params.hsetm,
      params.hseop,
      params.hsecom,
      params.hsenoa,
      params.sslcnos,
      params.sslcbod,
      params.sslcmoi,
      params.sslcsl,
      params.sslctm,
      params.sslcop,
      params.sslcnoa,

      params.RollNumber,
    ],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      return callback(true);
    }
  );
}

function delete_student_details(params, callback) {
  connection.query(
    "DELETE from `student`.`student_details` where roll_no = ?",
    [params.RollNumber],
    (err, results, fields) => {
      if (err) {
        return callback(false);
      }
      return callback(true);
    }
  );
}

module.exports = {
  fetch_students_details_hod,
  fetch_students_details_official,
  fetch_student_details,
  fetch_students_details,
  insert_student_details,
  edit_student_details,
  delete_student_details,
  fetch_students_details_pd,
  fetch_students_details_official_department,
};
