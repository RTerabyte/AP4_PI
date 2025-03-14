// creamos la constante express
const express = require("express");
const morgan = require("morgan");

// creamos otra constante que inicie el modulo express
const app = express();

//configuramos el puerto de entrada
// process.env.PORT sirve para que eliga el puerto que vamos a utilizar.
app.set("port", process.env.PORT || 8080);
app.use(morgan("dev"));

//añadimos esto para pdoer recibir los datos
app.use(express.urlencoded({ extended: false }));

//con esto detectaremos si funciona el puerto y  si realmente alguien a entrado.
app.listen(app.get("port"), () =>
  console.log(`hola desde el puerto ${app.get("port")}`)
);

//le indicamos donde estan las rutas
app.use(require("./routes/index"));
