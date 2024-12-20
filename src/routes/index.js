// importamos el router, lo llamamos y lo guardamos en una variable
const { Router } = require("express");
const router = Router();

// ahora en vez de utilizar app.get usaremos la variable router
router.get("/rutaGetConRouter", (req, res) => {
  console.log("Alguien a accedido a la ruta desde la carpeta routes");
  res.send("Hola desde index.js de la carpeta routes");
});

// ahora creamos todas las rutas que queramos
router.get("/ruta1", (req, res) => {
  console.log("Alguien a accedido desde la ruta 1");
  //con res.send sera un mensaje que nos saldra en el navegador
  res.send("Hola desde la ruta 1");
});
router.get("/ruta2", (req, res) => {
  console.log("Alguien a accedido desde la ruta 2");
  res.send("Hola desde la ruta 2");
});
router.get("/ruta3", (req, res) => {
  console.log("Alguien a accedido desde la ruta 3");
  res.send("Hola desde la ruta 3");
});
router.get("/ruta4", (req, res) => {
  console.log("Alguien a accedido desde la ruta 4");
  res.send("Hola desde la ruta 4");
});
router.get("/ruta5", (req, res) => {
  console.log("Alguien a accedido desde la ruta 5");
  res.send("Hola desde la ruta 5");
});
router.get("/rutaJSON", (req, res) => {
  console.log("Alguien a accedido desde la ruta JSON");
  res.json({
    saludo: "Hola desde la ruta JSON",
  });
});
// lo exportamos con este comando
module.exports = router;
