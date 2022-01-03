const Objeto = 
    [
        {
        nombre: "German",
        edad: 31
        },
        {
        nombre: "Ivan",
        edad: 27
        },
        {
        nombre: "Alex",
        edad: 45
        },
        {
        nombre: "Roberto",
        edad: 11
        }
    ]

let PantallaActual = 0;

const referencia = document.querySelector("#container")
const boton = document.querySelector('#avanzar')


const pantallaPrincipal = () => {
    boton.style.display = "block"
    boton.innerText = "Empezar Juego"
    referencia.innerHTML = `<p> Hola esto es el contenido inicial </p>`
}

pantallaPrincipal()

boton.addEventListener("click", () => {

    elegirCorrecta()

    console.log (PantallaActual)

    if (PantallaActual < Object.keys(Objeto).length){
        cargarDatos()
    } else {
        pantallaFinal()
    }
    
    PantallaActual++

})

const elegirCorrecta = () => {
    
}

const cargarDatos = () => {
    limpiarDatos()
    referencia.innerHTML = `<p>Mi nombre es ${Objeto[PantallaActual].nombre} y mi edad ${Objeto[PantallaActual].edad}</p>`
    boton.innerText = "Avance"
}

const limpiarDatos = () => {

}

const pantallaFinal = () => {
    boton.style.display = "none"
    referencia.innerHTML = `<p>Esta es la pantalla final</p>
                            <button onclick = "volverEmpezar()">Volver a empezar</button> 
                           `
}

const volverEmpezar = () => {
    PantallaActual = 0
    pantallaPrincipal()
}



