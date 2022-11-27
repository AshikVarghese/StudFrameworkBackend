/** @format */

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //Middleware
const user_login = require("./models/userlogin");
const change_pass = require("./models/changePass");
const student_insert = require("./models/student_insert");
const student_insert_roll = require("./models/student_insert");
const InternationalEx_Stud = require("./models/InternationalEx");
const InternationalEx_Stud_hod = require("./models/InternationalEx");
const InternationalEx_Stud_official = require("./models/InternationalEx");
const InternationalEx_Stud_display = require("./models/InternationalEx");
const InternationalEx_Stud_delete = require("./models/InternationalEx");
const InternationalEx_Stud_insert = require("./models/InternationalEx");
const fetch_student_forstudent = require("./models/GeneralStudent");
const InternationalEx_Stud_display_student = require("./models/InternationalEx");
const ExtraClub_Stud_insert = require("./models/ec_club_activites");
const ExtraClub_Stud_display = require("./models/ec_club_activites");
const ExtraOutreach_Stud_insert = require("./models/ec_outreach_activity");
const ExtraOutreach_Stud_display = require("./models/ec_outreach_activity");
const ExtraOutreach_CA_display = require("./models/ec_outreach_activity");
const ExtraOutreach_edit = require("./models/ec_outreach_activity");
const ExtraOutreach_verify = require("./models/ec_outreach_activity");
const ExtraOutreach_delete = require("./models/ec_outreach_activity");
const ExtraClub_CA_display = require("./models/ec_club_activites");
const ExtraClub_verify = require("./models/ec_club_activites");
const fetch_ec_sports_achv_student = require("./models/ec_sports_achv");
const fetch_ec_sports_achv = require("./models/ec_sports_achv");
const insert_ec_sports_achv = require("./models/ec_sports_achv");
const fetch_ec_culturals_activity = require("./models/ec_culturals_activity");
const insert_ec_culturals_activity = require("./models/ec_culturals_activity");
const fetch_ec_culturals_activity_student = require("./models/ec_culturals_activity");
const InternationalEx_Stud_edit = require("./models/InternationalEx");
const InternationalEx_Stud_verify = require("./models/InternationalEx");
const ExtraClub_delete = require("./models/ec_club_activites");
const ExtraClub_edit = require("./models/ec_club_activites");
const ExtraSport_delete = require("./models/ec_sports_achv");
const ExtraSport_edit = require("./models/ec_sports_achv");
const ExtraSport_verify = require("./models/ec_sports_achv");
const ExtraCultural_delete = require("./models/ec_culturals_activity");
const ExtraCultural_verify = require("./models/ec_culturals_activity");
const ExtraCultural_edit = require("./models/ec_culturals_activity");
const fetch_academic_columns = require("./models/academic_details");

const pd_internship = require("./models/pd_internship");
const pd_competitions = require("./models/pd_competitions");
const pd_courses = require("./models/pd_courses");
const pd_final_project = require("./models/pd_final_project");
const pd_guest_lecture = require("./models/pd_guest_lecture");
const pd_industrial_visit = require("./models/pd_industrial_visit");
const pd_inplant_training = require("./models/pd_inplant_training");
const pd_mini_project = require("./models/pd_mini_project");
const pd_motivational_talk = require("./models/pd_motivational_talk");
const pd_placement = require("./models/pd_placement");
const pd_publications = require("./models/pd_publications");
const pd_webinars = require("./models/pd_webinars");
const pd_workshops = require("./models/pd_workshops");
const pd_aptitude = require("./models/pd_aptitude");
const pd_sdiscovery = require("./models/pd_sdiscovery");
const pd_sskills = require("./models/pd_softskill");
const pd_empskills = require("./models/pd_employability_skill");

const bkpd = require("./models/bulkuploadpd");

const admin = require("./models/admin");
const temp = require("./models/temp");

const academic_details = require("./models/academic_details");
var cors = require("cors");
let student_details = require("./models/student_details");
const charts = require("./models/charts");

const multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "models/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.originalname); //Appending .xlsx
  },
});

var storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "models/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.originalname); //Appending .xlsx
  },
});

const upload = multer({ storage: storage });
const upload1 = multer({ storage: storage1 });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.options("*", cors());
// var corsMiddleware = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
//   res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With,accept,Authorization');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// }
// app.use(corsMiddleware);

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const http = require("http").Server(app);

app.post("/temp", (req, res) => {
  params = req.body;
  temp.ec(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

app.post("/userlogin", (req, res) => {
  params = req.body;
  user_login.user_login(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

app.post("/passchange", (req, res) => {
  params = req.body;
  change_pass.change_pass(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

app.post("/studentinsert", (req, res) => {
  params = req.body;
  student_insert.student_insert(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.status(results.code).send(results.message);
    }
  });
});

app.post("/insertroll", (req, res) => {
  params = req.body;
  student_insert_roll.student_insert_roll(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

app.post("/General", (req, res) => {
  params = req.body;
  student_details.fetch_students_details((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralHOD", (req, res) => {
  params = req.body;
  student_details.fetch_students_details_hod((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralOfficial", (req, res) => {
  student_details.fetch_students_details_official((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralOfficialDepartment", (req, res) => {
  student_details.fetch_students_details_official_department((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralOfficialBatch", (req, res) => {
  student_details.fetch_students_details_official_batch((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Academic", (req, res) => {
  params = req.body;
  academic_details.fetch_academic_details_classadvisor(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/AcademicsData", (req, res) => {
  params = req.body;
  academic_details.fetch_academic_values(params, (results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/AcademicsDataofficial", (req, res) => {
  academic_details.fetch_academic_details_official((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/AcademicsDataHOD", (req, res) => {
  let params = req.body;
  academic_details.fetch_academic_details_hod(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/academic_summary", (req, res) => {
  params = req.body;
  academic_details.fetch_academic_summary_record(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/InternationalExpo", (req, res) => {
  params = req.body;
  InternationalEx_Stud.InternationalEx_Stud((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/InternationalExpoHOD", (req, res) => {
  params = req.body;
  InternationalEx_Stud_hod.InternationalEx_Stud_hod((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/InternationalExpoofficial", (req, res) => {
  params = req.body;
  InternationalEx_Stud_official.InternationalEx_Stud_official((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/InternationalExposureDelete", (req, res) => {
  params = req.body;
  InternationalEx_Stud_delete.InternationalEx_Stud_delete((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraClubDelete", (req, res) => {
  params = req.body;
  ExtraClub_delete.ExtraClub_delete((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/InternationalExposureEdit", (req, res) => {
  params = req.body;
  InternationalEx_Stud_edit.InternationalEx_Stud_edit((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraClubEdit", (req, res) => {
  params = req.body;
  ExtraClub_edit.ExtraClub_edit((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/InternationalExposureVerify", (req, res) => {
  params = req.body;
  InternationalEx_Stud_verify.InternationalEx_Stud_verify((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraClubVerify", (req, res) => {
  params = req.body;
  ExtraClub_verify.ExtraClub_verify((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/InternationalExposure", (req, res) => {
  params = req.body;
  InternationalEx_Stud_display.InternationalEx_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/InternationalExposureStudent", (req, res) => {
  params = req.body;
  InternationalEx_Stud_display_student.InternationalEx_Stud_display_student(
    (results) => {
      res.send(JSON.stringify(results));
    }
  );
});

app.post("/insertstudinter", (req, res) => {
  params = req.body;
  InternationalEx_Stud_insert.InternationalEx_Stud_insert((results) => {
    res.status(results.code).send(results.message);
  });
});

app.post("/ExtraClubStudentDisplay", (req, res) => {
  params = req.body;
  ExtraClub_Stud_display.ExtraClub_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/ExtraClubCADisplay", (req, res) => {
  params = req.body;
  ExtraClub_CA_display.ExtraClub_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraOutreachCADisplay", (req, res) => {
  params = req.body;
  ExtraOutreach_CA_display.ExtraOutreach_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraSportsCADisplay", (req, res) => {
  params = req.body;
  fetch_ec_sports_achv.fetch_ec_sports_achv((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraCulturalCADisplay", (req, res) => {
  params = req.body;
  fetch_ec_culturals_activity.fetch_ec_culturals_activity((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/insertstudextraclub", (req, res) => {
  params = req.body;
  ExtraClub_Stud_insert.ExtraClub_Stud_insert((results) => {
    res.status(results.code).send(results.message);
  });
});

app.post("/insertstudextraoutreach", (req, res) => {
  params = req.body;
  ExtraOutreach_Stud_insert.ExtraOutreach_Stud_insert((results) => {
    res.status(results.code).send(results.message);
  });
});

app.post("/insertstudextrasports", (req, res) => {
  params = req.body;
  insert_ec_sports_achv.insert_ec_sports_achv((results) => {
    res.status(results.code).send(results.message);
  });
});

app.post("/insertstudextracultural", (req, res) => {
  params = req.body;
  insert_ec_culturals_activity.insert_ec_culturals_activity((results) => {
    res.status(results.code).send(results.message);
  });
});

app.post("/ExtraOutreachStudentDisplay", (req, res) => {
  params = req.body;
  ExtraOutreach_Stud_display.ExtraOutreach_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraSportsStudentDisplay", (req, res) => {
  params = req.body;
  fetch_ec_sports_achv_student.fetch_ec_sports_achv_student((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtraCulturalStudentDisplay", (req, res) => {
  params = req.body;
  fetch_ec_culturals_activity_student.fetch_ec_culturals_activity_student(
    (results) => {
      res.send(JSON.stringify(results));
    }
  );
});

app.post("/ExtraCulturalCADisplay", (req, res) => {
  params = req.body;
  fetch_ec_culturals_activity.fetch_ec_culturals_activity((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralStudent", (req, res) => {
  params = req.body;
  fetch_student_forstudent.fetch_student_forstudent(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralData", (req, res) => {
  params = req.body;
  student_details.fetch_student_details(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralDataDelete", (req, res) => {
  params = req.body;
  student_details.delete_student_details(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneralDataEdit", (req, res) => {
  params = req.body;
  student_details.edit_student_details(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ExtracurricularCA", (req, res) => {
  params = req.body;
  ExtraClub_Stud_display.ExtracurricularCA_display(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

// Student Display for ExtraCurricular
app.post("/ExtraCurricular_Stud_display", (req, res) => {
  params = req.body;
  ExtraClub_Stud_display.ExtraCurricular_Stud_display(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/OutreachEdit", (req, res) => {
  params = req.body;
  ExtraOutreach_edit.ExtraOutreach_edit((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/OutreachDelete", (req, res) => {
  params = req.body;
  ExtraOutreach_delete.ExtraOutreach_delete((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/OutreachVerify", (req, res) => {
  params = req.body;
  ExtraOutreach_verify.ExtraOutreach_verify((results) => {
    res.send(JSON.stringify(results));
  });
});

/*-----------------Sports CA---------------------------*/

app.post("/SportDelete", (req, res) => {
  params = req.body;
  ExtraSport_delete.ExtraSport_delete((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/SportEdit", (req, res) => {
  params = req.body;
  ExtraSport_edit.ExtraSport_edit((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/SportVerify", (req, res) => {
  params = req.body;
  ExtraSport_verify.ExtraSport_verify((results) => {
    res.send(JSON.stringify(results));
  });
});

/* --------------------------------------------------------- */

/*-----------------Culturals CA---------------------------*/

app.post("/CulturalDelete", (req, res) => {
  params = req.body;
  ExtraCultural_delete.ExtraCultural_delete((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/CulturalEdit", (req, res) => {
  params = req.body;
  ExtraCultural_edit.ExtraCultural_edit((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/CulturalVerify", (req, res) => {
  params = req.body;
  ExtraCultural_verify.ExtraCultural_verify((results) => {
    res.send(JSON.stringify(results));
  });
});

/* --------------------------------------------------------- */

app.post("/GenerateInternshipCharts", (req, res) => {
  params = req.body;
  GenerateInternshipCharts.GenerateInternshipCharts((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GeneratePlacementCharts", (req, res) => {
  params = req.body;
  GeneratePlacementCharts.GeneratePlacementCharts((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GenerateAcademicsCharts", (req, res) => {
  params = req.body;
  GenerateAcademicsCharts.GenerateAcademicsCharts((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/GenerateAcademicSummaryCharts", (req, res) => {
  params = req.body;
  GenerateAcademicSummaryCharts.GenerateAcademicSummaryCharts((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/getColumnName", (req, res) => {
  params = req.body;
  fetch_academic_columns.fetch_academic_columns((results) => {
    res.send(JSON.stringify(results));
  });
});

/* PD Internship */
app.post("/intern_insert", (req, res) => {
  params = req.body;
  pd_internship.PdIntern_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});

app.post("/intern_edit", (req, res) => {
  params = req.body;
  pd_internship.PdIntern_edit((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/intern_stud_display", (req, res) => {
  params = req.body;
  pd_internship.PdIntern_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/intern_CA_display", (req, res) => {
  params = req.body;
  pd_internship.PdIntern_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/intern_Stud_delete", (req, res) => {
  params = req.body;
  pd_internship.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/intern_verify", (req, res) => {
  params = req.body;
  pd_internship.PdIntern_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/intern_delete", (req, res) => {
  params = req.body;
  pd_internship.PdIntern_delete((results) => {
    res.send(JSON.stringify(results));
  });
});

/* --------------------------------------------------------- */
/* PD Competition */

app.post("/comp_stud_display", (req, res) => {
  params = req.body;
  pd_competitions.PdComp_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/comp_ca_display", (req, res) => {
  params = req.body;
  pd_competitions.PdComp_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/pdcomp_Stud_display", (req, res) => {
  params = req.body;
  pd_competitions.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/comp_verify", (req, res) => {
  params = req.body;
  pd_competitions.PdComp_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/comp_delete", (req, res) => {
  params = req.body;
  pd_competitions.PdComp_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/comp_edit", (req, res) => {
  params = req.body;
  pd_competitions.PdComp_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/comp_Stud_insert", (req, res) => {
  params = req.body;
  pd_competitions.PdComp_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD Courses */
app.post("/cour_Stud_display", (req, res) => {
  params = req.body;
  pd_courses.PdCour_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/cour_CA_display", (req, res) => {
  params = req.body;
  pd_courses.PdCour_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/courpd_stud_display", (req, res) => {
  params = req.body;
  pd_courses.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Cour_Stud_insert", (req, res) => {
  params = req.body;
  pd_courses.PdCour_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
app.post("/cour_verify", (req, res) => {
  params = req.body;
  pd_courses.PdCour_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/cour_delete", (req, res) => {
  params = req.body;
  pd_courses.PdCour_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/cour_edit", (req, res) => {
  params = req.body;
  pd_courses.PdCour_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
/* --------------------------------------------------------- */
/* PD final project */
app.post("/finpro_Stud_display", (req, res) => {
  params = req.body;
  pd_final_project.PdFinal_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/finpro_CA_display", (req, res) => {
  params = req.body;
  pd_final_project.PdFinal_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/prodev_Stud_display", (req, res) => {
  params = req.body;
  pd_final_project.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/finpro_verify", (req, res) => {
  params = req.body;
  pd_final_project.PdFinal_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/finpro_delete", (req, res) => {
  params = req.body;
  pd_final_project.PdFinal_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/finpro_edit", (req, res) => {
  params = req.body;
  pd_final_project.PdFinal_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/final_stud_insert", (req, res) => {
  params = req.body;
  pd_final_project.PdFinal_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD guest lecture */
app.post("/guest_stud_display", (req, res) => {
  params = req.body;
  pd_guest_lecture.PdGuest_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/guest_Ca_display", (req, res) => {
  params = req.body;
  pd_guest_lecture.PdGuest_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/pdguest_stud_display", (req, res) => {
  params = req.body;
  pd_guest_lecture.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/guest_verify", (req, res) => {
  params = req.body;
  pd_guest_lecture.PdGuest_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/guest_delete", (req, res) => {
  params = req.body;
  pd_guest_lecture.PdGuest_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/guest_edit", (req, res) => {
  params = req.body;
  pd_guest_lecture.PdGuest_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/guest_stud_insert", (req, res) => {
  params = req.body;
  pd_guest_lecture.PdGuest_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD Workshops */
app.post("/workshop_studisplay", (req, res) => {
  params = req.body;
  pd_workshops.PdWork_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/workshop_cadisplay", (req, res) => {
  params = req.body;
  pd_workshops.PdWork_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/workshop_pfstudisplay", (req, res) => {
  params = req.body;
  pd_workshops.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/workshop_verify", (req, res) => {
  params = req.body;
  pd_workshops.PdWork_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/workshop_delete", (req, res) => {
  params = req.body;
  pd_workshops.PdWork_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/workshop_edit", (req, res) => {
  params = req.body;
  pd_workshops.PdWork_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/workshop_stuinsert", (req, res) => {
  params = req.body;
  pd_workshops.PdWork_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD Webinars */
app.post("/webinar_display", (req, res) => {
  params = req.body;
  pd_webinars.PdWeb_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/webinar_cadisplay", (req, res) => {
  params = req.body;
  pd_webinars.PdWeb_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/webinar_pfdisplay", (req, res) => {
  params = req.body;
  pd_webinars.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/webinar_verify", (req, res) => {
  params = req.body;
  pd_webinars.PdWeb_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/webinar_delete", (req, res) => {
  params = req.body;
  pd_webinars.PdWeb_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/webinar_edit", (req, res) => {
  params = req.body;
  pd_webinars.PdWeb_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/webinar_insert", (req, res) => {
  params = req.body;
  pd_webinars.PdWeb_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD Publications */
app.post("/publication_display", (req, res) => {
  params = req.body;
  pd_publications.PdPublica_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/publication_cadisplay", (req, res) => {
  params = req.body;
  pd_publications.PdPublica_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/publication_pfdisplay", (req, res) => {
  params = req.body;
  pd_publications.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/publication_verify", (req, res) => {
  params = req.body;
  pd_publications.PdPublica_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/publication_delete", (req, res) => {
  params = req.body;
  pd_publications.PdPublica_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/publication_edit", (req, res) => {
  params = req.body;
  pd_publications.PdPublica_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/publication_insert", (req, res) => {
  params = req.body;
  pd_publications.PdPublica_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD Placement */
app.post("/placement_display", (req, res) => {
  params = req.body;
  pd_placement.PdPlace_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/placement_cadisplay", (req, res) => {
  params = req.body;
  pd_placement.PdPlace_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/placement_pfdisplay", (req, res) => {
  params = req.body;
  pd_placement.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/placement_verify", (req, res) => {
  params = req.body;
  pd_placement.PdPlace_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/placement_delete", (req, res) => {
  params = req.body;
  pd_placement.PdPlace_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/placement_edit", (req, res) => {
  params = req.body;
  pd_placement.PdPlace_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/placement_insert", (req, res) => {
  params = req.body;
  pd_placement.PdPlace_Stud_insert((results) => {
    res.send(JSON.stringify(results));
  });
});
/* --------------------------------------------------------- */
/* PD Motivational Talk */
app.post("/Motivational_display", (req, res) => {
  params = req.body;
  pd_motivational_talk.PdMotive_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Motivational_cadisplay", (req, res) => {
  params = req.body;
  pd_motivational_talk.PdMotive_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Motivational_pfdisplay", (req, res) => {
  params = req.body;
  pd_motivational_talk.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Motivational_verify", (req, res) => {
  params = req.body;
  pd_motivational_talk.PdMotive_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Motivational_delete", (req, res) => {
  params = req.body;
  pd_motivational_talk.PdMotive_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Motivational_edit", (req, res) => {
  params = req.body;
  pd_motivational_talk.PdMotive_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Motivational_insert", (req, res) => {
  params = req.body;
  pd_motivational_talk.PdMotive_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */
/* PD Miniproject */
app.post("/Miniproj_display", (req, res) => {
  params = req.body;
  pd_mini_project.PdMini_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Miniproj_cadisplay", (req, res) => {
  params = req.body;
  pd_mini_project.PdMini_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Miniproj_pfdisplay", (req, res) => {
  params = req.body;
  pd_mini_project.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Miniproj_verify", (req, res) => {
  params = req.body;
  pd_mini_project.PdMini_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Miniproj_delete", (req, res) => {
  params = req.body;
  pd_mini_project.PdMini_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Miniproj_edit", (req, res) => {
  params = req.body;
  pd_mini_project.PdMini_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Miniproj_insert", (req, res) => {
  params = req.body;
  pd_mini_project.PdMini_Stud_insert(params, (results) => {
    res.status(results.code).send(results.message);  
  });
});

/* --------------------------------------------------------- */
/* PD Inplant Training */
app.post("/Inplant_display", (req, res) => {
  params = req.body;
  pd_inplant_training.PdInplant_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Inplant_cadisplay", (req, res) => {
  params = req.body;
  pd_inplant_training.PdInplant_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Inplant_pfdisplay", (req, res) => {
  params = req.body;
  pd_inplant_training.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Inplant_verify", (req, res) => {
  params = req.body;
  pd_inplant_training.PdInplant_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Inplant_delete", (req, res) => {
  params = req.body;
  pd_inplant_training.PdInplant_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Inplant_edit", (req, res) => {
  params = req.body;
  pd_inplant_training.PdInplant_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Inplant_insert", (req, res) => {
  params = req.body;
  pd_inplant_training.PdInplant_Stud_insert((results) => {
    res.send(JSON.stringify(results));
  });
});
/* --------------------------------------------------------- */
/* PD Industrial visit */
app.post("/Industrialv_display", (req, res) => {
  params = req.body;
  pd_industrial_visit.PdIndustry_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Industrialv_cadisplay", (req, res) => {
  params = req.body;
  pd_industrial_visit.PdIndustry_CA_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Industrialv_pfdisplay", (req, res) => {
  params = req.body;
  pd_industrial_visit.ProfDevelop_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Industrialv_verify", (req, res) => {
  params = req.body;
  pd_industrial_visit.PdIndustry_verify((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Industrialv_delete", (req, res) => {
  params = req.body;
  pd_industrial_visit.PdIndustry_delete((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Industrialv_edit", (req, res) => {
  params = req.body;
  pd_industrial_visit.PdIndustry_edit((results) => {
    res.send(JSON.stringify(results));
  });
});
app.post("/Industrialv_insert", (req, res) => {
  params = req.body;
  pd_industrial_visit.PdIndustry_Stud_insert((results) => {
    res.status(results.code).send(results.message);  
  });
});
/* --------------------------------------------------------- */

app.post("/ProfessionalDevelopmentCA", (req, res) => {
  params = req.body;
  student_details.fetch_students_details_pd(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/ProfessionalDevelopmentHOD", (req, res) => {
  params = req.body;
  params.batch = "None";
  student_details.fetch_students_details_pd(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

/* -------------- GRAPHS -----------------------*/

/* -------------- HOD GRAPHS -----------------------*/
app.post("/InternshipGraphHOD", (req, res) => {
  params = req.body;
  charts.GenerateInternshipChartsHOD(params, (results) => {
    let intern_lst = results.map((item) => {
      return item.intern_count;
    });
    let batches = results.map((item) => {
      return item.batch;
    });

    res.send(JSON.stringify({ intern_lst: intern_lst, batches: batches }));
  });
});

app.post("/PlacementGraphHOD", (req, res) => {
  params = req.body;
  params.dept = params.dept.toUpperCase();
  charts.GeneratePlacementChartsHOD(params, (results) => {
    let placement_lst = results.map((item) => {
      return item.placement_count;
    });
    let batches = results.map((item) => {
      return item.batch;
    });
    res.send(
      JSON.stringify({ placement_lst: placement_lst, batches: batches })
    );
  });
});

app.post("/AcademicsGraphHOD", (req, res) => {
  params = req.body;
  params.dept = params.dept.toUpperCase();
  charts.GenerateAcademicsChartsHOD(params, (results) => {
    res.send(JSON.stringify({ results }));
  });
});

app.post("/AcademicSummaryGraphHOD", (req, res) => {
  params = req.body;
  params.dept = params.dept.toUpperCase();
  charts.GenerateAcademicSummaryChartsHOD(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

/* -------------- Class Advisor GRAPHS -----------------------*/
app.post("/InternshipGraphCA", (req, res) => {
  params = req.body;
  charts.GenerateInternshipChartsCA(params, (results) => {
    let intern_lst = results.map((item) => {
      return item.intern_count;
    });
    let batches = results.map((item) => {
      return item.batch;
    });

    res.send(JSON.stringify({ intern_lst: intern_lst, batches: batches }));
  });
});

app.post("/PlacementGraphCA", (req, res) => {
  params = req.body;
  params.dept = params.dept.toUpperCase();
  charts.GeneratePlacementChartsCA(params, (results) => {
    let placement_lst = results.map((item) => {
      return item.placement_count;
    });
    let batches = results.map((item) => {
      return item.batch;
    });
    res.send(
      JSON.stringify({ placement_lst: placement_lst, batches: batches })
    );
  });
});

app.post("/AcademicsGraphHOD", (req, res) => {
  params = req.body;
  params.dept = params.dept.toUpperCase();
  charts.GenerateAcademicsChartsCA(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/AcademicSummaryGraphHOD", (req, res) => {
  params = req.body;
  params.dept = params.dept.toUpperCase();
  charts.GenerateAcademicSummaryChartsCA(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

/* -------------- Official GRAPHS -----------------------*/
app.post("/InternshipGraphOfficial", (req, res) => {
  charts.GenerateInternshipChartsOfficial((results) => {
    let intern_lst = results.map((item) => {
      return item.intern_count;
    });
    let batches = results.map((item) => {
      return item.dept;
    });

    res.send(JSON.stringify({ intern_lst: intern_lst, batches: batches }));
  });
});

app.post("/PlacementGraphOfficial", (req, res) => {
  charts.GeneratePlacementChartsOfficial((results) => {
    let placement_lst = results.map((item) => {
      return item.placement_count;
    });
    let batches = results.map((item) => {
      return item.dept;
    });
    res.send(
      JSON.stringify({ placement_lst: placement_lst, batches: batches })
    );
  });
});

app.get("/download_template", (req, res) => {
  res.download(
    "./models/template/academic_details.xlsx",
    "template.xlsx",
    (err) => {
      console.log(err);
    }
  );
});

app.get("/download_all/:id", (req, res) => {
  var file = "./models/template/" + req.params.id;
  res.download(file, "template.xlsx", (err) => {
    console.log(err);
  });
});

// Admin controls - Create
app.post("/admin_create_creds", (req, res) => {
  params = req.body;
  admin.insert_login_cred(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

// Admin controls - Delete
app.post("/admin_delete_creds", (req, res) => {
  params = req.body;
  admin.remove_cred(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

// Admin controls - Edit
app.post("/admin_edit_creds", (req, res) => {
  params = req.body;
  admin.edit_cred(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

//Admin controls - Display
app.post("/admin_get_creds", (req, res) => {
  params = req.body;
  user_login.get_login_details(params, (results) => {
    if (!results) {
      console.log("error");
    } else {
      res.send(results);
    }
  });
});

//bulk for pd
app.post("/bulkforpd", upload.single("file"), (req, res) => {
  var file_present = req.file;
  if (!file_present) {
    res.send("File Not Found (Please Check)");
  } else {
    var params = req.body;
    var req = { path: req.file.path, type: params.value };
    bkpd.bulkuploadpd(req, (results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  }
});

//Aptitude edit and delete
app.post("/aptitude_edit_delete", (req, res) => {
  params = req.body;
  if (params.edit == "no") {
    pd_aptitude.delete_aptitude((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else if (params.edit == "yes") {
    pd_aptitude.edit_aptitude((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else {
    res.send("Invalid API call");
  }
});

//aptitude ca display
app.post("/aptitude_cadisplay", (req, res) => {
  params = req.body;
  pd_aptitude.get_aptitude((results) => {
    res.send(JSON.stringify(results));
  });
});

//sskills ca display
app.post("/sskills_cadisplay", (req, res) => {
  params = req.body;
  pd_sskills.get_soft_skill((results) => {
    res.send(JSON.stringify(results));
  });
});

//empskills ca display
app.post("/empskills_cadisplay", (req, res) => {
  params = req.body;
  pd_empskills.get_employability_skill((results) => {
    res.send(JSON.stringify(results));
  });
});

//sdiscovery edit and delete
app.post("/sdiscovery_edit_delete", (req, res) => {
  params = req.body;
  if (params.edit == "no") {
    pd_sdiscovery.delete_sdiscovery((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else if (params.edit == "yes") {
    pd_sdiscovery.edit_sdiscovery((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else {
    res.send("Invalid API call");
  }
});

//sdiscovery ca display
app.post("/sdiscovery_cadisplay", (req, res) => {
  params = req.body;
  pd_sdiscovery.get_sdiscovery((results) => {
    res.send(JSON.stringify(results));
  });
});

//credits
app.post("/getcreditsCA", (req, res) => {
  params = req.body;
  charts.credits_dataCA(params, (results) => {
    let json_lst = [];

    for (let i = 0; i < results[0].length; i++) {
      let json = new Object();
      json.batch = results[0][i].batch;
      json.verified = results[0][i].total;
      json.pending = 0;
      json_lst.push(json);
    }

    for (let inx = 0; inx < results[1].length; inx++) {
      for (let inx1 = 0; inx1 < json_lst.length; inx1++) {
        if (json_lst[inx1].batch == results[1][inx].batch) {
          json_lst[inx1].pending = results[1][inx].total;
        }
      }
    }

    res.send(JSON.stringify(json_lst));
  });
});

app.post("/getcreditsOfficials", (req, res) => {
  params = req.body;
  charts.credits_data_Officials(params, (results) => {
    let json_lst = [];

    for (let i = 0; i < results[0].length; i++) {
      let json = new Object();
      json.dept = results[0][i].dept;
      json.verified = results[0][i].total;
      json.pending = 0;
      json_lst.push(json);
    }

    for (let inx = 0; inx < results[1].length; inx++) {
      for (let inx1 = 0; inx1 < json_lst.length; inx1++) {
        if (json_lst[inx1].dept == results[1][inx].dept) {
          json_lst[inx1].pending = results[1][inx].total;
        }
      }
    }

    res.send(JSON.stringify(json_lst));
  });
});

app.post("/get_credits_student", (req, res) => {
  let params = req.body;
  academic_details.get_credits_student(params, (results) => {
    res.send(JSON.stringify(results));
  });
});

app.post("/file_upload_admin", upload1.single("file"), (req, res) => {
  var file_present = req.file;
  if (!file_present) {
    res.send("File Not Found (Please Check)");
  } else {
    var req = { path: req.file.path };
    bkpd.bulkadmin(req, (results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  }
});

app.post("/sskils_stud_display", (req, res) => {
  params = req.body;
  pd_sskills.sskill_Stud_display((results) => {
    res.send(JSON.stringify(results));
  });
});

//sskills edit and delete
app.post("/skills_edit_delete", (req, res) => {
  params = req.body;
  if (params.edit == "no") {
    pd_sskills.delete_soft_skill((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else if (params.edit == "yes") {
    pd_sskills.edit_soft_skill((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else {
    res.send("Invalid API call");
  }
});

//sskills edit and delete
app.post("/eskills_edit_delete", (req, res) => {
  params = req.body;
  if (params.edit == "no") {
    pd_empskills.delete_employability_skill((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else if (params.edit == "yes") {
    pd_empskills.edit_employability_skill((results) => {
      if (!results) {
        console.log("error");
      } else {
        res.send(results);
      }
    });
  } else {
    res.send("Invalid API call");
  }
});

const PORT = process.env.PORT || 8080;

http.listen(PORT, () => {
  console.log(`Server running in port :"${PORT}"`);
});

require("./models/bulkupload.js")(app);
