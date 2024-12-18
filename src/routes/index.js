// importamos el router, lo llamamos y lo guardamos en una variable
const { Router } = require("express");
const router = Router();

// ahora en vez de utilizar app.get usaremos la variable router
router.get("/rutaGetConRouter", (req, res) => {
  console.log("Alguien a accedido a la ruta desde la carpeta routes");
  res.send("Hola desde index.js de la carpeta routes");
});

// lo exportamos con este comando
module.exports = router;
