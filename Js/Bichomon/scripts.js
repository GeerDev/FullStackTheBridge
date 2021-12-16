console.log("-----------------------------------------");
console.log(document.title);
console.log("-----------------------------------------");

// Ejercicio 1
const guarda1 = document.getElementById('gen-1');
guarda1.innerText = "Generasión 1 Pokimon";

// Ejercicio 2
// querySelectorAll('.infocard').querySelector('span')
const guarda2 = guarda1.nextElementSibling.querySelectorAll('.infocard-lg-img');
console.log (guarda2);
// Venga crack que aqui tienes que poner un bucle pa que luego no se te olvide.
for (let i = 0; i < guarda2.length; i++){
    const guarda3 = guarda2[i];
    console.log (guarda3);
    guarda3.style.background = "yellow";
}

// Ejercicio 3
const url = document.URL;
console.log ("Url:", url);

// Ejercicio 4
const dominio = document.domain;
console.log ("Dominio:", dominio);

// Ejercicio 5
const imagenes = document.images;
let img = document.getElementsByTagName('img');
console.log ("Imagenes:", imagenes);

// Ejercicio 6
// for (let i = 0; i < img.length; i++) {
//     img[i].setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
// }

// Ejercicio 7
const eje = document.querySelectorAll('.infocard-lg-data')
// console.log(eje);
for (let i = 0; i < eje.length; i++) {
    const eje2 = eje[i].querySelector('small:last-child').children;
    // console.log(eje2);
    for (j = 0; j < eje2.length; j++) {
        const eje3 = eje2[j].innerHTML;
        // console.log (eje3);
        if (eje3 == "Flying") {
            // console.log("Eureka!");
            eje[i].style.background = "green";
        }
    }
}
