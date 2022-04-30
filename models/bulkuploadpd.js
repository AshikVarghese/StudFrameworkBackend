const readXlsxFile = require("read-excel-file/node");
const connection = require("../config/dbconfig");

function bulkuploadpd(value, callback) {
    return callback("success");
}

module.exports = {bulkuploadpd : bulkuploadpd}