const express = require("express");
const app = express();

const puerto = 3000;

app.get('/',(req,res)=>{
    res.send("Hola esto es un mensaje de bienvenida")
})

app.get('/Productos',(req,res)=>{
    res.send("Listado de productos Get")
})

app.post('/Productos',(req,res)=>{
    res.send("Listado de productos Post")
})

app.put('/Productos',(req,res)=>{
    res.send("Listado de productos Put")
})

app.delete('/Productos',(req,res)=>{
    res.send("Listado de productos Delete")
})

app.get('/Usuarios',(req,res)=>{
    res.send("Listado de usuarios")
})

app.post('/Usuarios',(req,res)=>{
    res.send("Crear un usuario")
})

app.put('/Usuarios',(req,res)=>{
    res.send("Actualizar un usuario")
})

app.delete('/Usuarios',(req,res)=>{
    res.send("Borrar un usuario")
})

app.listen(puerto, (err) => {
    if (err) {
        console.error(`No se pudo levantar el servidor en el puerto ${puerto}`)
    } else {
        console.log("Bienvenidos a Node.js Server Side");
        console.log(`Servidor levantado en el puerto ${puerto}`);
    }
  });


  