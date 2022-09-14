const codenotch = require("../database");

const getApuntadas = (req, res) => {
  console.log(req.query.id);
  let sql;
  if (req.query.id != "")
    sql =
      "SELECT student_id as student, subject_id as subject FROM marks WHERE student_id=" +
      req.query.id;
  else {
    sql = `SELECT first_name, last_name, title FROM students JOIN marks ON students.student_id = marks.student_id JOIN subjects ON marks.subject_id = subjects.subject_id`;
  }
  codenotch.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { getApuntadas };