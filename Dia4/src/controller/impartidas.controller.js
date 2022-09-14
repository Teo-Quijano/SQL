const codenotch = require("../database");

const getImpartidas = (req, res) => {
  console.log(req.query.id);
  let sql;
  if (req.query.id != "")
    sql =
      "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON subject_teacher.teacher_id = teachers.teacher_id JOIN subjects ON subjects.subject_id = subject_teacher.teacher_id WHERE teachers.teacher_id = " +
      req.query.id;
  else {
    sql = `SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON subject_teacher.teacher_id = teachers.teacher_id JOIN subjects ON subjects.subject_id = subject_teacher.teacher_id`;
  }

  codenotch.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { getImpartidas };