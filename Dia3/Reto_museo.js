const mysql = require("mysql2");

let codenotch = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laredo@001",
  database: "museo",
});

codenotch.connect((error) => {
  if (!error) {
    console.log("Conexion iniciada");
  } else {
    console.log(error);
  }
});


let params = [];
let req = "SELECT obra AS obra, ubicacion.ubicacion, ubicacion.fecha_retorno AS retorno, owners.owner_name AS propietario, owners.address AS direccion, owners.email AS email FROM coleccion JOIN ubicacion ON ubicacion_id_ubicacion = ubicacion.ï»¿id_ubicacion JOIN owners ON owners_id_owner = owners.ï»¿id_owner WHERE estatus = 'prestada' ORDER BY retorno"

codenotch.query(req, params, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

let params1 = [];
let req1 = "SELECT COUNT(*) AS obras, ubicacion.exposicion FROM ubicacion JOIN coleccion ON ubicacion_id_ubicacion = ubicacion.ï»¿id_ubicacion GROUP BY ubicacion.exposicion ORDER BY obras DESC"

codenotch.query(req1, params1, (error, result) => {
    if (!error) {
        console.log("Ordenar de mayor a menor");
        console.log(result);
    }else (
        console.log(error)
    )
})
