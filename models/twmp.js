const connection = require("../config/dbconfig");

let query = "SELECT licet_email,roll_no from student.student_details where student.student_details.batch=?"

connection.query(query,["2021-2025"],(err,results,fields)=>{
    if(err){
        console.log(err);

    }
    for (let i = 0; i < results.length; i++) {
        connection.query("UPDATE login_details set roll_no = ? WHERE email = ?",[
            results[i].roll_no,
            results[i].licet_email
        ])
    }
})