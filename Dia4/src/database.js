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

module.exports = codenotch;