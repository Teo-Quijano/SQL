let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laredo@001",
  database: "reto2",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion Correcta");
  }
});
let sql = "SELECT first_name, last_name FROM students";
connection.query(sql, function (err, result) {
  if (err) console.log(err);
  else {
    console.log(result);
  }
});

let sql1 = "SELECT * FROM reto2.teachers";
connection.query(sql1, function (err, result) {
  if (err) console.log(err);
  else {
    console.log(result);
  }
});

let sql2 = "DELETE FROM reto2.marks WHERE `date` < '2012-08-23';";
connection.query(sql2, (error, result) => {
  if (!error) {
    console.log("Eliminado");
    console.log(result);
  } else console.log(error);
});

let sql3 = "UPDATE reto2.marks SET mark = '5' WHERE mark < '5'";
connection.query(sql3, (error, result) => {
  if (!error) {
    console.log("Actualizado");
    console.log(result);
  } else console.log(error);
});