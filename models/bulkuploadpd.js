const readXlsxFile = require("read-excel-file/node");
const connection = require("../config/dbconfig");
var crypto = require("crypto");


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
        let temp_query = "INSERT INTO "+value.type+" ";
        for (let i = 0; i < 1; i++) {
            let temp_str_query  ='(';
            for (let j = 0; j < columns.length; j++) {
                temp_str_query = temp_str_query+rows[i][j];
                if(j != columns.length-1){
                    temp_str_query  = temp_str_query + ","
                }
            }
            temp_query = temp_query + temp_str_query + ")"          
        }
        let query = temp_query + " VALUES ";
        for(let i=0;i<pd_arr.length;i++){
            let str_query  ='(';

            for(let j = 0;j<columns.length;j++){
                str_query  = str_query +"'"+ pd_arr[i][columns[j]] + "'";
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
    })
}

function bulkadmin(value, callback) {
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

        let temp_query = "INSERT INTO `student`.`login_details` ";

        for (let i = 0; i < 1; i++) {
            let temp_str_query  ='(';
            for (let j = 0; j < columns.length; j++) {
                temp_str_query = temp_str_query+rows[i][j];
                if(j != columns.length-1){
                    temp_str_query  = temp_str_query + ","
                }
            }
            temp_query = temp_query + temp_str_query + ")"          
        }

        let query = temp_query + " VALUES ";

        for(let i=0;i<pd_arr.length;i++){
            let str_query  ='(';
            for(let j = 0;j<columns.length;j++){
                if(j==1){
                    var hash_password = crypto.createHash("sha512").update(pd_arr[i][columns[j]]).digest("hex");
                    str_query  = str_query +"'"+ hash_password + "'";
                }
                else{
                    str_query  = str_query +"'"+ pd_arr[i][columns[j]] + "'";
                }
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
    })
}

module.exports = {
    bulkuploadpd : bulkuploadpd,
    bulkadmin : bulkadmin
}