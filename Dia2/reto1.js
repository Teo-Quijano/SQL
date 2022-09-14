const mysql = require("mysql2")

let codenotch = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laredo@001",
  database: "reto2",
});

codenotch.connect((error) => {
  if (!error) {
    console.log("Conexion iniciada");
  } else {
    console.log(error);
  }
});

// let req = "SELECT subject_id, AVG(mark) FROM reto2.marks WHERE subject_id = 1;";

// codenotch.query(req, (error, result) => {
//   if (!error) {
//     console.log("Peticion realizada");
//     console.log(result);
//   } else console.log(error);
// });

// let req1 = "SELECT COUNT(*) AS total_students FROM reto2.students;";

// codenotch.query(req1, (error, result) => {
//   if (!error) {
//     console.log("Peticion realizada");
//     console.log(result);
//   } else console.log(error);
// });

// let req2 = "SELECT * FROM reto2.groups;";

// codenotch.query(req2, (error, result) => {
//   if (!error) {
//     console.log("Peticion realizada");
//     console.log(result);
//   } else console.log(error);
// });

// let req3 =
//   "DELETE FROM reto2.marks WHERE mark > 5 AND (`date` >= '2021-01-01' AND `date` <= '2021-12-31');";

// codenotch.query(req3, (error, result) => {
//   if (!error) {
//     console.log("Peticion realizada");
//     console.log(result);
//   } else console.log(error);
// });

// let req4 = "SELECT * FROM reto2.students WHERE start_year = 2022;";

// codenotch.query(req4, (error, result) => {
//   if (!error) {
//     console.log("Peticion realizada");
//     console.log(result);
//   } else console.log(error);
// });

// let req5 =
//   "SELECT subject_id, COUNT(teacher_id) AS asigned_teachers FROM reto2.subject_teacher GROUP BY subject_id;";

// codenotch.query(req5, (error, result) => {
//   if (!error) {
//     console.log("Peticion realizada");
//     console.log(result);
//   } else console.log(error);
// });