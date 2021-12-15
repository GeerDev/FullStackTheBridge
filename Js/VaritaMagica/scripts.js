// Ejercicio 1
const enlaces = document.querySelectorAll('a');

// console.log(enlaces);

for (let i=0; i<enlaces.length; i++){
  enlaces[i].addEventListener("click", e => e.preventDefault());
}

// Ejercicio 2
const imagenes = document.getElementsByTagName('img');
// console.log(imagenes);

for (let i=0; i<imagenes.length; i++) {
    imagenes[i].addEventListener("click", () => {
         imagenes[i].setAttribute("src",`./assets/${getRandom(gifs)}`);
    })
}

const parrafos = document.querySelectorAll('p');
for (let i=0; i<parrafos.length; i++) {
    parrafos[i].addEventListener("click", () => {
         parrafos[i].style.background = getRandom(misColores);
         parrafos[i].style.color = "red";
    })
}

const articulos = document.querySelectorAll('article');
for (let i=0; i<articulos.length; i++) {
    articulos[i].addEventListener("click", () => {
         articulos[i].style.background = "black";
    })
}

// Ejercicio 3
let valores = []
for (let i=0; i<imagenes.length; i++) {
    valores.push(imagenes[i].src);
}

for (let i=0; i<imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", () => {
         imagenes[i].setAttribute("src","./assets/abracadabra.gif");
    })
}
for (let i=0; i<imagenes.length; i++) {
    imagenes[i].addEventListener("mouseout", () => {
         imagenes[i].setAttribute("src", valores[i]);
    })
}

for (let i=0; i<parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", () => {
         parrafos[i].style.background = "orange";
         parrafos[i].style.color = "black";
    })
}
for (let i=0; i<parrafos.length; i++) {
    parrafos[i].addEventListener("mouseout", () => {
         parrafos[i].style.background = "white";
         parrafos[i].style.color = "black";
    })
}

for (let i=0; i<articulos.length; i++) {
    articulos[i].addEventListener("mouseover", () => {
         articulos[i].style.background = "red";
    })
}
for (let i=0; i<articulos.length; i++) {
    articulos[i].addEventListener("mouseout", () => {
         articulos[i].style.background = "blue";
    })
}

// Ejercicio Premium

const colors = ['red', 'blue', 'green']
const misColores = ['#000000', '#14213d', '#fca311', '#e5e5e5', '#ffffff'];
const gifs = ['abracadabra.gif','magic-1.gif','magic-2.gif','magic-3.gif','magic-4.gif','magic-5.gif','magic-6.gif']

const getRandom = (array) => {
 
    let aleatorio = Math.floor(Math.random() * array.length);
    console.log(aleatorio);
    return array[aleatorio];
    
}

console.log(getRandom(colors))
