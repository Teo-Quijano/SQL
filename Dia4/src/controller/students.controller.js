const codenotch = require("../database");

let getAlumno = (req, res) => {
  {
    console.log(req.query.id);
    let sql;
    if (req.query.id == null) sql = "SELECT * FROM students";
    else sql = "SELECT * FROM students WHERE student_id=" + req.query.id;
    console.log(sql);

    codenotch.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
};

const postAlumno = (req, res) => {
  console.log("reqest",req.body);

  let sql =
    "INSERT INTO students (student_id, first_name, last_name, group_id, entry_year) " +
    "VALUES ('" +
    req.body.student_id + "', '" + 
    req.body.first_name +
    "', '" +
    req.body.last_name +
    "', " +
    req.body.group_id +
    ", '" +
    req.body.start_year +
    "')";

  console.log(sql);
  codenotch.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      console.log(result);
      if (result.insertId) res.send(String(result.insertId));
      else res.send("-1");
    }
  });
};

const putAlumno = (req, res) => {
  console.log("req",req.body);

  let sql = `UPDATE students SET first_name = "${req.body.first_name}",
                last_name= "${req.body.last_name}",
                group_id= ${req.body.group_id},
                entry_year= '${req.body.start_year}'
                WHERE student_id= ${req.body.student_id}`;

  console.log(sql);
  codenotch.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
};

const deleteAlumno = (req, res) => {
  console.log(req.body);
  let sql = `DELETE FROM students WHERE student_id= ${req.body.student_id}`;
  console.log(sql);
  codenotch.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
};

module.exports = { getAlumno, postAlumno, putAlumno, deleteAlumno };