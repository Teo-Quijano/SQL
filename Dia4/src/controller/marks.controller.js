const codenotch = require("../database");

const getNota = (req, res) => {
  console.log(req.query.id);
  let sql;
  if (req.query.id == null) sql = "SELECT * FROM marks";
  else
    sql =
      "SELECT student_id, subject_id, mark from marks WHERE student_id=" +
      req.query.id;
  codenotch.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const postNota = (req, res) => {
  console.log(req.body);
  let findsql = "SELECT student_id, subject_id, mark from marks WHERE student_id=" +
  req.body.mark_id;
  // codenotch.query(findsql, (err, result) => {
  //   console.log("result",result)
  //   if (result) {
  //     console.log('here')
  //     res.send({err: "This ID is already exist!"})
  //   }
  // })
  let sql = 
    "INSERT INTO marks (student_id, subject_id, date, mark, mark_id) " +
    "VALUES ('" +
    req.body.student_id +
    "', '" +
    req.body.subject_id +
    "', '" +
    req.body.date +
    "', '" +
    req.body.mark +
    "', '" + req.body.mark_id + "')";
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

const putNota = (req, res) => {
  console.log(req.body);

  let sql = `UPDATE marks SET student_id = ${req.body.student_id}, 
            subject_id = ${req.body.subject_id}, 
            date = "${req.body.date}", 
            mark = ${req.body.mark} 
            WHERE mark_id = ${req.body.mark_id}`;

  console.log(sql);
  codenotch.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
};

const deleteNota = (req, res) => {
  console.log(req.body);
  let sql = `DELETE FROM marks WHERE mark_id= ${req.body.mark_id}`;
  console.log(sql);
  codenotch.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
};

module.exports = { getNota, postNota, putNota, deleteNota };