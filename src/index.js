// creamos la constante express
const express = require("express");

// creamos otra constante que inicie el modulo express
const app = express();

//configuramos el puerto de entrada
// process.env.PORT sirve para que eliga el puerto que vamos a utilizar.
app.set("port", process.env.PORT || 8080);

//con esto detectaremos si funciona el puerto si realmente alguien a entrado.
app.listen(app.get("port"), leerPuerto());

// creamos la funcion leerPuerto
function leerPuerto() {
  console.log(`hola desde el puerto ${app.get("port")}`);
}
//creamos una ruta get
app.get("/rutaGet", function (req, res) {
  console.log("alguen a accedido a la ruta get");
  res.send("hola haciendo pruebas desde la ruta get");
});

app.get("/", function (req, res) {
  console.log("alguen a accedido al servidor");
  res.send("Bienvenido al servidor");
});
