const { validationResult } = require("express-validator");
const readXlsxFile = require("read-excel-file/node");
const connection = require("../config/dbconfig");


function bulkuploadpd(value, callback) {
    readXlsxFile(value.path).then((rows)=>{
        var pd_arr = []
        let columns = rows[0];
        for (let i = 1; i < rows.length; i++) {
            let pd = {};
            for (var j = 0; j < rows[i].length; j++) {
                pd[rows[0][j]] = rows[i][j];
            }
            pd_arr.push(pd)
        }
        let query = "INSERT INTO "+value.type+ " VALUES ";
        for(let i=0;i<pd_arr.length;i++){
            let str_query  ='(';

            for(let j = 0;j<columns.length;j++){
                str_query  = str_query + pd_arr[i][columns[j]];
                if(j != columns.length-1){
                    str_query  = str_query + ","
                }
                    
            }            
            query = query + str_query + ")"
            if(i != pd_arr.length-1){
                query = query +",";
            }
        }
            connection.query(query,(err,results,fields)=>{
                if(err){
                    console.log(err);
                    return callback("Bulk Upload Failed")
                }
                else{
                    return callback("BulK Upload Success");
                }
            })
    //     console.log(pd_arr);
    //     if(value.type == "glecture"){
    //         var table = "pd_glecture";
    //         var errors = 0;

    //         for (let i = 0; i < pd_arr.length; i++) {
    //             connection.query("INSERT INTO "+table+" VALUES (?,?,?,?,?,?)",
    //             [
    //                 pd_arr[i].roll_no,
    //                 pd_arr[i].email,
    //                 pd_arr[i].topic,
    //                 pd_arr[i].semester,
    //                 pd_arr[i].remarks,
    //                 pd_arr[i].licet_credits   
    //             ],
    //             (err, results, fields) => {
    //                 if (err) {
    //                   console.log(err);
    //                 }
    //             })
    //             if(i == pd_arr.length-1){
    //                 if (errors != 0) {
    //                     return callback("failure");
    //                 }
    //                 else{
    //                     return callback("success")
    //                 }
    //             }
    //         } 
    //     }
    })
}

module.exports = {bulkuploadpd : bulkuploadpd}