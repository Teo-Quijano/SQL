const mysql = require("mysql2");

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

let params = [];
let req =
  "SELECT CONCAT(reto2.students.first_name, ' ', reto2.students.last_name) AS alumnos, reto2.subjects.title AS asignatura FROM marks JOIN students ON reto2.marks.student_id = reto2.students.student_id JOIN subjects ON reto2.marks.subject_id = reto2.subjects.subject_id ORDER BY alumnos;";

codenotch.query(req, params, (error, result) => {
  if (!error) {
    console.log("Nombres y Apellidos + Asignaturas");
    console.log(result);
  } else console.log(error);
});

let params1 = [];
let req1 =
  "SELECT CONCAT(reto2.teachers.first_name, ' ', reto2.teachers.last_name) as profesor, reto2.subjects.title AS asignatura FROM teachers JOIN reto2.subject_teacher ON reto2.teachers.teacher_id = reto2.subject_teacher.teacher_id JOIN subjects ON reto2.subject_teacher.subject_id = subjects.subject_id ORDER BY profesor;";

codenotch.query(req1, params1, (error, result) => {
  if (!error) {
    console.log("Nombres y Apellidos Profesores");
    console.log(result);
  } else console.log(error);
});

let params2 = [];
let req2 =
  "SELECT reto2.subjects.title AS asignatura, COUNT(student_id) AS numero_alumnos, CONCAT(reto2.teachers.first_name, ' ', reto2.teachers.last_name) AS profesor FROM marks JOIN subjects ON reto2.marks.subject_id = reto2.subjects.subject_id JOIN reto2.subject_teacher ON reto2.subjects.subject_id = reto2.subject_teacher.subject_id JOIN teachers ON reto2.subject_teacher.teacher_id = reto2.teachers.teacher_id GROUP BY asignatura ORDER BY asignatura;";

codenotch.query(req2, params2, (error, result) => {
  if (!error) {
    console.log("Total Alumnos y Asignaturas");
    console.log(result);
  } else console.log(error);
});