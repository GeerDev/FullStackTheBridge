//PatataMelon Ejercicio Bootcamp JavaScript
for (let i =0; i<=10; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("Patata-Melon");
  }
  else if (i % 3 === 0){
    console.log("Patata");
  }
    else if (i % 5 === 0){
      console.log("Melon");
    }
    else{
    console.log(i);
  }
  // Prueba a ponerlo sin el último "else" --> Comprueba lo que pasa
}

console.log("------------------------------------------------")

// Bikram

// Ejercicio 1
let variableSinValor;
console.log("Ejercicio 1:",variableSinValor);

// Ejercicio 2
let booleano1 = true;
let booleano2 = false;
console.log("Ejercicio 2:",booleano1,booleano2);

// Ejercicio 3
const PI = 3.14;
console.log("Ejercicio 3:",PI);

// Ejercicio 4
const TAU = PI*2;
console.log("Ejercicio 4:",TAU);

// Ejercicio 5
const booleanoAnd = booleano1 && booleano2;
console.log("Ejercicio 5:",booleanoAnd);

// Ejercicio 6
const booleanoNot = !booleano1;
console.log("Ejercicio 6:",booleanoNot);

// Ejercicio 7
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log("Ejercicio 7:", booleanoMix0);

// Ejercicio 8
let incrementarDesp = 2;
const resultadoDesp = incrementarDesp++;
console.log("Ejercicio 8:", resultadoDesp);
const result = incrementarDesp * 2;
console.log("Lo ves ahora ya si que vale: ", result);
// Perfectamente puedes poner resultadoDesp sin "const" -Preg.Data
// Se supone que guardar el formato de lo que le asocias
// El no poner "let" o "const" en una variable, te coge "var"
// mejor pon un tipo de constante a all.

// Ejercicio 9
let incrementarAntes = 2;
resultadoAntes = ++incrementarAntes;
console.log("Ejercicio 9:", resultadoAntes);

// Ejercicio 10
console.log("Ejercicio 10:");
for (let contarHasta10_2 = 0; contarHasta10_2 <= 10; contarHasta10_2++){
  console.log(contarHasta10_2);
  if (contarHasta10_2 === 10){
    console.log("Has llegado hasta 10 crack");
  }
}

// Ejercicio 11
console.log("Ejercicio 11:");
let postJ = 0;
let postL = 0;

for (let i = 0; i < 11; i++){
  postJ += postL++;
  console.log(postJ,postL);
  // Prueba a pones "++" antes y despues de la variable
  // Valor inicial antes de trabajar con la variable y despues
}

// Ejercicio 12
console.log("Ejercicio 12:");
let sumaPares = 0;
for (let i = 0; i < 10; i++){
  if(i % 2 == 0){
    sumaPares = sumaPares + i;
    //console.log(sumaPares);
  }
}
console.log(sumaPares);
// Trata de poner la declaracion de la variable dentro del bucle

// Ejercicio 13
let variableValorNumerico = Math.floor(Math.random()*100);
console.log("Ejercicio 13:", variableValorNumerico);

// Ejercicio 14
const MiNombre = 'German Fernandez';
console.log("Ejercicio 14:", MiNombre);

// Ejercicio 15
const MiNumeroFav = 17;
console.log("Ejercicio 15:", MiNumeroFav);

// Ejercicio 16
const booleanoOr = booleano1 || booleano2;
console.log("Ejercicio 16:", booleanoOr);

// Ejercicio 17
const booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MiNumeroFav);
console.log("Ejercicio 17:", booleanoMix1);

// Ejercicio 18
const seisNoEsNueve = (6 !== 9);
console.log("Ejercicio 18:", seisNoEsNueve);
// No es estrictamente igual = Es distinto a

// Ejercicio 19
const booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav*TAU));
console.log("Ejercicio 19:",  booleanoMix2);
// Un número negativo mas grande siempre va a ser más pequeño

// Ejercicio 20
const valorSuma = MiNumeroFav + variableValorNumerico;
console.log("Ejercicio 20:", valorSuma);

// Ejercicio 21
const valorResta = MiNumeroFav - variableValorNumerico;
console.log("Ejercicio 21:", valorResta);

// Ejercicio 22
const valorMultiplicacion = MiNumeroFav * variableValorNumerico;
console.log("Ejercicio 22:", valorMultiplicacion);

// Ejercicio 23
const valorDivision = MiNumeroFav/3;
console.log("Ejercicio 23:", valorDivision);

// Ejercicio 24
let contarHasta10 = 0;
while (contarHasta10 < 11){
  // Porque sigue apareciendo un valor despues de obtener resultado
  //console.log(contarHasta10);
  if(contarHasta10 === 10){
    console.log("Ejercicio 24: Llegaste a 10")
  }
  contarHasta10++;
}

// Ejercicio 25
console.log("Ejercicio 25:");
let preL = 0;
let preJ = 0;

let i = 0;
while (i < 11){
  preL = preL + ++preJ
  console.log(preL, preJ);
  i++;
}

// Ejercicio 26
console.log("Ejercicio 26:");
let sumaImpares = 0;
let w = 0;
while (w < 10){
  if (w % 2 !== 0){
    sumaImpares += w;
  }
  w++;
}
console.log(sumaImpares);

// Preguntar porque "while" devuelve por consola siempre otro
// valor más que la última iteración