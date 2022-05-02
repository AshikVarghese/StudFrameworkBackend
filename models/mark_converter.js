/** @format */
// const connection = require("../config/dbconfig");

function mark_converter(params, callback) {
  return callback(
    (params.mark_obtained / params.tot_mark) * params.mark_converted
  );
}

module.exports = {
  mark_converter: mark_converter,
};
