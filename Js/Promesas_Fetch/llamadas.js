// Ejercicio 1
let almacen; // No puedo almacenar nada que no este llamado dentro del fetch
// Todas las razas
fetch('https://dog.ceo/api/breeds/list/all')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Imagen random de una raza
fetch('https://dog.ceo/api/breeds/image/random')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Todas las imágenes de una raza
fetch(' https://dog.ceo/api/breed/kelpie/images')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Adaptar la Url para poder pasarle argumentos
const pasarArgumento = (raza) => {
    fetch(`https://dog.ceo/api/breed/${raza}/images`)
            .then(res=>res.json())
            .then(json=> {
                almacen = json;
                console.log ("Datos desde dentro de la llamada:", almacen);
                // pintarHtml(almacen); // Al utilizar datos de la llamada, solo podemos llamar a la función aquí :)
            })
}
pasarArgumento ('african');

// Mostrar información en el HTML
// No me puedo almacenar las variables globales para despues utilizar en otro punto - Esto no funcionará (undefined)
console.log ("Datos desde fuera de la llamada:", almacen);


const pintarHtml = (datitos) => {
    console.log("Estos son los datos:", datitos);
    const { message: imagen } = datitos;
    console.log("Esta es la imagen:", imagen)
    const ref = document.getElementById('contenedor');
    for (let img in imagen){
        ref.innerHTML += `<img src="${imagen[img]}" width="200" height="300">`
    }
}

// Ejercicio 2
const buscarUsuario = () => {

    const entrada = document.getElementById('entrada').value;
    console.log ("Examinando el campo de entrada:", entrada);

    const usuario = fetch(`https://api.github.com/users/${entrada}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json)
                pintarHtml2 (json);
            })
    // console.log("Promesa:", usuario)
}

const pintarHtml2 = (datos) => {

    const { login, avatar_url, public_repos} = datos;

    const lista1 = document.getElementById('lista1');
    const lista2 = document.getElementById('lista2');
    const lista3 = document.getElementById('lista3');

    lista1.innerHTML = `Nombre: ${login}`;
    lista2.innerHTML = `Repositorios Públicos: ${public_repos}`;
    lista3.innerHTML = `<img src="${avatar_url}" width="400" height="300">`;

}

// Ejercicio 3
const usuariosGithub = ['Gerahara', 'Midudev', 'CarlosDiazGirol', 'Sol-Zeta'];

const arrayPromesas = usuariosGithub.map (e => fetch(`https://api.github.com/users/${e}`));
console.log ("Array de Promesas:", arrayPromesas);

Promise.all(arrayPromesas).then(values => {
    console.log("Promise All:", values);
    for (valor of values){
        // Todas las respuestas
        console.log ("Url:",valor.url, "Estado:", valor.status);
    }
    return values;
        // Mapea cada respuesta aplicando el json() y ademas aplica el Promise.all para que se produzcan todas a la vez
    }).then(values => Promise.all(values.map(r => r.json())))
    .then(elemento => elemento.forEach(e => {
        console.log (e);        
        // Url del repositorio de cada Usuario
        console.log (e.url);
        // Nombre de cada Usuario
        console.log (e.name);
    }));

    // Then() -> Resuelve promesas una detrás de otra

