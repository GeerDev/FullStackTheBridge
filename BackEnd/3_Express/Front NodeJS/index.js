   const contenedor = document.getElementById('contenedor')
   const boton = document.querySelector('button')
   const nombre = document.querySelector('#nombre')
   const precio = document.querySelector('#precio')

   const pintarEnPantalla = () => {
    axios.get('http://localhost:3000/Productos')
        .then(res => {
            const { items } = res.data
            items.forEach((element, index) => {
                contenedor.innerHTML += `<div class = "bloque">
                                        <p class="parrafo">Nombre del producto: ${element.nombre}</p>
                                        <p class="parrafo">Precio del producto: ${element.precio}</p>
                                        <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick = "borrar(${index + 1})">
                                        Eliminar: ${element.nombre}
                                        </button>
                                        </div>`
            });
        })
        .catch(err => console.error(err))
   }

   pintarEnPantalla()

   async function añadirNuevoElemento() {
        try {
            const res = await axios.post('http://localhost:3000/Productos',{
                    nombre: nombre.value,
                    precio: precio.value
            })
                return res
            }
        catch (err) {
            console.error(err?.response?.data?.msg)
            } 
    }

    boton.addEventListener('click', () => {
       añadirNuevoElemento().then(datos => pintarEnPantalla())
       nombre.value = "";
       precio.value = "";
       contenedor.innerHTML = ``;
    })
    
    async function eliminarElemento(elemento) {
        try {
            const res = await axios.delete(`http://localhost:3000/Productos/${elemento}`)
            return res
            }
        catch (error) {
            console.error(error)
            } 
    }

    const borrar = (elemento) => {
        console.log(elemento);
        eliminarElemento(elemento).then(datos => pintarEnPantalla(datos.data))
        contenedor.innerHTML = ``;
    }

   