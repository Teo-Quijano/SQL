let mysql = require("mysql2");

let codenotch = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laredo@001",
  database: "codenotch",
});

codenotch.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion Correcta");
  }
});

let req = "ALTER TABLE `profesores` ADD COLUMN `phone` INT NULL AFTER `asignatura`;"

codenotch.query(req, (error, result) => {
    if (!error) {
        console.log('Peticion realizada');
        console.log(result);
    }else (
        console.log(error)
    )
})

let req1 = "ALTER TABLE `estudiantes` DROP COLUMN `gender`;"

codenotch.query(req1, (error, result) => {
    if (!error) {
        console.log('Peticion realizada');
        console.log(result);
    }else (
        console.log(error)
    )
})

let req2 = "DROP TABLE `grupos`;"

codenotch.query(req2, (error, result) => {
    if (!error) {
        console.log('Peticion realizada');
        console.log(result);
    }else (
        console.log(error)
    )});