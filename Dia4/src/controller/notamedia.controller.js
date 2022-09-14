const codenotch = require("../database");

const getMedia = (req, res) => {
  console.log(req.query.id);
  let sql;
  if (req.query.id != "")
    sql =
      "SELECT student_id, AVG (mark) FROM marks WHERE student_id=" +
      req.query.id;

  codenotch.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { getMedia };