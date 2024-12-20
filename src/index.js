// creamos la constante express
const express = require("express");

// creamos otra constante que inicie el modulo express
const app = express();

//configuramos el puerto de entrada
// process.env.PORT sirve para que eliga el puerto que vamos a utilizar.
app.set("port", process.env.PORT || 8080);

//con esto detectaremos si funciona el puerto y  si realmente alguien a entrado.
app.listen(app.get("port"), () =>
  console.log(`hola desde el puerto ${app.get("port")}`)
);

//le indicamos donde estan las rutas
app.use(require("./routes/index"));
