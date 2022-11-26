const connection = require("../config/dbconfig");

function student_insert(params, callback) {
  let params_lst = [
    params.rollno,
    params.registerno,
    params.name,
    params.aadhar,
    params.peremail,
    params.offemail,
    params.batch,
    params.department,
    params.quo,
    params.sex,
    params.dateofbirth,
    params.nationality,
    params.contact,
    params.fanam,
    params.manam,
    params.famob,
    params.mamob,
    params.community,
    params.religion,
    params.parish,
    params.dalit,
    params.preaddr,
    params.peraddr,
    params.bloodgroup,
    params.mothertongue,
    params.langknown,
    params.pan,
    params.faqul,
    params.maqul,
    params.faocc,
    params.maocc,
    params.faoffadd,
    params.maoffadd,
    params.faanu,
    params.maanu,
    params.faemail,
    params.maemail,
    params.gunam,
    params.guqul,
    params.guocc,
    params.guoffadd,
    params.guanu,
    params.gumob,
    params.guemail,
    params.sibnos,
    params.sibnam,
    params.sibqul,
    params.sibocc,
    params.sibalum,
    params.appno,
    params.doa,
    params.reglat,
    params.dayhos,
    params.schlnam,
    params.schlamt,
    params.firgra,
    params.ecoback,
    params.prolan,
    params.softpro,
    params.deptrelpro,
    params.cert,
    params.others,
    params.anaapt,
    params.commu,
    params.social,
    params.lead,
    params.otherins,
    params.stg,
    params.ltg,
    params.promemnam,
    params.promemno,
    params.promemdur,
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
  ];
  var quesn = "(?";
  for (var i = 0; i < params_lst.length - 1; i++) {
    quesn = quesn + ",?";
  }
  quesn = quesn + ")";
  connection.query(
    "INSERT INTO student.student_details(roll_no,reg_no,sname,aadhar_no,email,licet_email,batch,dept,quota,gender,dob,nationality,contact_no,father_name,mother_name,father_mob_no,mother_mob_no,community,religion,if_catholic_parish,dalit_catholic_yn,present_address,permanent_address,blood_group,mother_tongue,lang_know,pan,father_qualification,mother_qualification,father_occupation,mother_occupation,father_office_address,mother_office_address,father_annual_income,mother_annual_income,father_email,mother_email,guardian_name,guardian_qualification,guardian_occupation,guardian_office_address,guardian_annual_income,guardian_mob_no,guardian_email,no_of_siblings,name_siblings,qualification_siblings,occupation_siblings,alumni_licet_loyola_yn,application_no,date_of_ad,regular_lateral_rl,dayschl_hosteller_dh,scholarship_name,scholarship_amount,first_graduate_yn,eco_backward_yn,programming_languages,software_proficiency,dept_rel_proficiency,certifications,other_skills,aptitude_analytical_skills,communication_skills,social_media_exposure,leadership_skills,other_interpersonal_skills,short_term_goal,long_term_goal,membership_name,membership_no,membership_duration,hse_school_name,hse_board,hse_medium,hse_sec_lang,hse_group,hse_marks,hse_percentage,hse_cutoff,hse_attempts,sslc_school_name,sslc_board,sslc_medium,sslc_sec_lang,sslc_marks,sslc_percentage,sslc_attempts) values " +
      quesn,
    params_lst,
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return callback({message : "Server Down", code : 500});
      } else {
        connection.query("UPDATE student.login_details set roll_no = ? where email=?",[params.rollno ,params.offemail],(err,results,fields)=>{
          if(err){
            return callback({message : "Server Down", code : 500});
          }
          else{
            return callback({message : "Submitted Successfully!!", code : 200});
          }
        })
      }
    }
  );
}

function student_insert_roll(params, callback) {
  connection.query(
    "UPDATE login_details set roll_no=? WHERE(email = ?)",
    [params.rollno, params.offemail],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log("Inserted");
      }
    }
  );
}

module.exports = {
  student_insert: student_insert,
  student_insert_roll: student_insert_roll,
};
