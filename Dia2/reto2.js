const mysql = require('mysql2')

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


let req = "SELECT student_id, mark FROM reto2.marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND `date` BETWEEN '01-01-2021' AND '31-12-2021');";

codenotch.query(req, (error, result) => {
  if (!error) {
    console.log("Peticion realizada");
    console.log(result);
  } else console.log(error);
});

let req1 = 'SELECT AVG (mark) FROM reto2.marks WHERE subject_id AND date BETWEEN "01-01-2021" AND "31-12-2021" GROUP BY subject_id';
codenotch.query(req1, (error, result) => {
  if (!error) {
    console.log("Peticion realizada");
    console.log(result);
  } else console.log(error);
});

let req2 = `SELECT student_id, AVG (mark) FROM reto2.marks WHERE student_id AND date BETWEEN "01-01-2021" AND "31-12-2021" GROUP BY student_id`;
codenotch.query(req2, (error, result) => {
  if (!error) {
    console.log("Peticion realizada");
    console.log(result);
  } else {
    console.log(error);
  }
});