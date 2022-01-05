
// // Guardar datos en LocalStorage
// localStorage.setItem('name', 'Alejandro')
// localStorage.surname = 'Reyes' 

// // Leer datos en LocalStorage
// let firstName = localStorage.getItem('name');
// let lastName  = localStorage.surname;
// // console.log(`Hola, mi nombre es ${firstName} ${lastName}`)

// // Eliminar un valor LocalStorage
// // localStorage.removeItem('name')

// // Borrar todo de LocalStorage
// // localStorage.clear()

// // Leer todo lo que hay en el LocalStorage
// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     // alert(`${key}: ${localStorage.getItem(key)}`);
//   }

// // Leer/escribir un objeto de LocalStorage
// // Objetos
// //Escribir
// localStorage.setItem('user', JSON.stringify({
//     username: 'Alejandro',
//     api_key: 'abc123xyz789'
// }));
// //Leer
// var user = JSON.parse(localStorage.getItem('user'));
// // console.log(user)

// // Arrays
// var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
//               "Kill Bill", "Death Proof", "Inglourious Basterds"];
// //Escribir
// localStorage.setItem("quentinTarantino", JSON.stringify(movies));

// //Leer
// var retrievedData = localStorage.getItem("quentinTarantino");

// // Borrar todo de LocalStorage
// localStorage.clear()

// --- Ejercicios ---
const boton = document.getElementById('boton')

boton.addEventListener('click', () => {

    let misObjetos = JSON.parse(localStorage.getItem('formulario')) || [];

    const nombre = document.getElementById('name').value
    const email = document.getElementById('email').value
    const mensaje = document.getElementById('message').value

    const objeto = {nombre, email, mensaje}

    misObjetos.push(objeto)

    localStorage.setItem('formulario', JSON.stringify(misObjetos));

})

const pintarEnPantalla = () => {
    const contenedor = document.getElementById('contenedor')
    const formulario = JSON.parse(localStorage.getItem('formulario'));

    if (formulario === null || formulario.length === 0) {
    contenedor.innerHTML = `<p>Es nulo compañero donde vas</p>`
    } else {
    formulario.forEach ((elemento) => {
        contenedor.innerHTML += `<p>Mi nombre es ${elemento.nombre}, mi email es ${elemento.email} y he escrito este mensaje ${elemento.mensaje} <button onclick = "deleteOne('${elemento.nombre}')">Borrar elemento</button></p>`
    })
}
}

pintarEnPantalla()

const deleteAll = () => {
    localStorage.clear()
}

const deleteOne = (laclave) => {

    // console.log (laclave)

    let nuevo =  JSON.parse(localStorage.getItem('formulario'))
    // console.log (nuevo)

    const filtrado = nuevo.filter(element => element.nombre !== laclave)
    // console.log (filtrado)

    localStorage.setItem('formulario', JSON.stringify(filtrado));
    // Evita que no recargue la pagina y se actualice automaticamente
    contenedor.innerHTML = ``
    pintarEnPantalla()
}

// Faltaria filtrar los objetos por Id que son unicos pero vamos para el ejercicio utilizamos el nombre



