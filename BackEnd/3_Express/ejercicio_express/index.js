const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const puerto = 3000;

const productos = {
    description: 'Productos',
    items: [
      {  id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      {  id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }

const { items } = productos

app.get('/',(req,res)=>{
    res.send("Hola esto es un mensaje de bienvenida")
})

app.get('/Productos',(req,res)=>{
    res.json(productos)
})

app.get('/Productos/filtro/:precio',(req,res)=>{
    const { precio } = req.params
    res.json( items.filter(producto => producto.precio === +precio))
})

app.get('/Productos/FiltroRango',(req,res)=>{
    const filtrado = items.filter(producto => producto.precio > 50 && producto.precio < 250 )
    res.json(filtrado)
})

app.get('/Productos/:id',(req,res)=>{
    const encontrado = items.some(producto => producto.id === +req.params.id)

    if(encontrado){
        res.json(items.filter(producto => producto.id === +req.params.id))
    }else{
        res.status(404).json({msg:`Producto con el id ${req.params.id} no encontrado`})
    }
})

app.get('/Productos/filtronombre/:nombre',(req,res)=>{
    const encontrado = items.some(producto => producto.nombre === req.params.nombre)

    if(encontrado){
        res.json(items.filter(producto => producto.nombre === req.params.nombre))
    }else{
        res.status(404).json({msg:`Producto con el nombre ${req.params.nombre} no encontrado`})
    }
})

app.post('/Productos',(req,res)=>{
    const nuevoProducto = {
        id: items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    if(!req.body.nombre || !req.body.precio){
        return res.status(400).json({msg:'Por favor rellene su nombre o introduzca un precio'})
    }

    items.push(nuevoProducto)
    res.json(productos)
})

app.put('/Productos/:id',(req,res)=>{
    const encontrado = items.some(producto => producto.id === +req.params.id)
    if(encontrado){
       items.forEach(producto =>{
           if(producto.id === +req.params.id){
                producto.nombre = req.body.nombre ? req.body.nombre: producto.nombre,
                producto.precio = req.body.precio ? req.body.precio : producto.precio

            res.json(producto)
           }
       })
    }else{
        res.status(404).json({msg:`Producto con el id ${req.params.id} no encontrado`})
    }
})

app.delete('/Productos/:id',(req,res)=>{
    const encontrado = items.some(producto => producto.id === +req.params.id)
  
    if(encontrado){
        const borrar = items.filter(producto => producto.id === +req.params.id)
        const indice = items.map(producto => producto.id).indexOf(borrar[0].id)
        items.splice(indice, 1)
        res.json(items)
    }else{
        res.status(404).json({msg:`Producto con el id ${req.params.id} no encontrado`})
    }
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


  