const express = require("express");
const app = express();

const puerto = 3000;

app.get('/',(req,res)=>{
    res.send("Hola esto es un mensaje de bienvenida")
})

app.listen(puerto, (err) => {
    if (err) {
        console.error(`No se pudo levantar el servidor en el puerto ${puerto}`)
    } else {
        console.log("Bienvenidos a Node.js Server Side");
        console.log(`Servidor levantado en el puerto ${puerto}`);
    }
  });


  