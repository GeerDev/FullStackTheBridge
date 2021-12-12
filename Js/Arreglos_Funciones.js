// Ejercicio 1
const arrayVacio = [];
console.log("Ejercicio 1:", arrayVacio);

// Ejercicio 2
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
console.log("Ejercicio 2:", arrayNumeros);

// Ejercicio 3
const arrayNumerosPares = [0,2,4,6,8];
console.log("Ejercicio 3:", arrayNumerosPares);

// Ejercicio 4
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
console.log("Ejercicio 4:", arrayBidimensional);

// Ejercicio 5
const suma = (a,b) => a + b;
const result1 = suma(3,7);
console.log("Ejercicio 5:", result1);

// Ejercicio 6
const potenciacion = (a,b) => a ** b;
const result2 = potenciacion(2,5);
console.log("Ejercicio 6:", result2);

// Ejercicio 7
const separarPalabras = (palabra) => palabra.split(" ");
const result3 = separarPalabras("Hola que pasa crack");
console.log("Ejercicio 7:", result3);

// Ejercicio 8
const repetirString = (cadena, numero) => {
  let bucle = "";
  for(let i = 0; i < numero; i++){
    bucle += cadena + " ";
  }
  return bucle;
}
const result4 = repetirString("Ojo que nos repetimos", 4);
console.log("Ejercicio 8:", result4);

// Ejercicio 9
const esPrimo = (premoh) => {
  let valor = [];
  for (let i = 0; i <= premoh; i++){
    if (premoh % i === 0 ){
      valor.push(i);
    }
  }

  if (valor.length > 2){
    return [false, valor];
  } else {
    return [true, valor];
  }
}

const result5 = esPrimo(11);
console.log("Ejercicio 9:", result5);

// Ejercicio 10
const ordenarArray = (arraydenumeros) => {
  const ordenado = arraydenumeros.sort((a, b) => a - b);
  return ordenado
}
const result6 = ordenarArray([7,1,13,2,4,99]);
console.log("Ejercicio 10:", result6);

// Ejercicio 11
const obtenerPares = arraydenumeros2 => {
  let arreglo = [];
  for (let i = 0; i < arraydenumeros2.length; i++){
    if(arraydenumeros2[i] % 2 === 0){
      arreglo.push(arraydenumeros2[i]);
    }
  }
  return arreglo;
}
const result7 = obtenerPares([7,1,13,2,4,99]);
console.log("Ejercicio 11:", result7);
// Pregunta Data: Intenta hacer el ejercicio utilizando "slice"

// Ejercicio 12
const pintarArray = (arrayCadena) => {
  //const transform = []
  //transform.push(arrayCadena.toString());
  //return transform;
  u = "[" + arrayCadena.toString() + "]";
  return u;
}
const result8 = pintarArray([7,1,13,2,4,99]);
console.log("Ejercicio 12:", result8);

// Ejercicio 13
const arrayMapi = (arrayEspesial, funcion) => {
    let arregloNuevo = [];

    for(let i = 0; i < arrayEspesial.length; i++){
    const salida = funcion(arrayEspesial[i]);
    arregloNuevo.push(salida)
    }

    console.log("Siguiendo callback 2:",arregloNuevo);
    return arregloNuevo;
};

const obtener = (e) => {
  console.log("Siguiendo callback 1:",e);
  let cambiando;
  cambiando = e.toUpperCase(); 
  return cambiando;
}

const result9 = arrayMapi(['Papa', 'Mama'], obtener);
console.log("Ejercicio 13:", result9);

// Ejercicio 14
const eliminarDuplicados = (arrayDuplicado) => {
  const unicos = [];

  for (let i = 0; i < arrayDuplicado.length; i++){
    const elem = arrayDuplicado[i];
    
    if (!unicos.includes(elem)){
      unicos.push(elem);
    }
  }

  return unicos;

}
const result10 = eliminarDuplicados([1,2,3,4,2,1,7,8,2,5]);
console.log("Ejercicio 14:", result10);

// Ejercicio 15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log("Ejercicio 15:", arrayNumerosNeg);

// Ejercicio 16
const holaMundo = ['Hola', 'Mundo'];
console.log("Ejercicio 16:", holaMundo);

// Ejercicio 17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
console.log("Ejercicio 17:", loGuardoTodo);

// Ejercicio 18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
console.log("Ejercicio 18:", arrayDeArrays);

// Ejercicio 19
const multiplicacion = (c,d) => c * d;
const res1 = multiplicacion(2,8);
console.log("Ejercicio 19:", res1);

// Ejercicio 20
const division = (c,d) => c / d;
const res2 = division(8,2);
console.log("Ejercicio 20:", res2);

// Ejercicio 21
const esPar = (unNumero) => {
  if (unNumero % 2 == 0){
    return true
  }
  return false;
}
const res3 = esPar(10);
console.log("Ejercicio 21:", res3);

// Ejercicio 22
const arrayFunciones = (funcion1, funcion2, funcion3) => {

   // return [funcion1(3,6),funcion2(2,3),funcion3(3,6)]
      const primero = funcion1(3,6);
      const segundo = funcion2(2,3);
      const tercero = funcion3(3,6);
      return `${primero} ${segundo} ${tercero}`

}
const res4 = arrayFunciones(suma, potenciacion, multiplicacion);
console.log("Ejercicio 22:", res4);

// Ejercicio 23
const ordenarArray2 = (arrayMayor) => arrayMayor.sort((a, b) => b - a);
const res5 = ordenarArray2([7,1,13,2,4,99]);
console.log("Ejercicio 23:", res5);

// Ejercicio 24
const obtenerImpares = (arrayImpares) => {
    let arregloImpar = [];
    for(let i = 0; i < arrayImpares.length; i++){
      if (arrayImpares[i] % 2 !== 0){
        arregloImpar.push(arrayImpares[i]);
      }
    }
    return arregloImpar;
}
const res6 = obtenerImpares([7,1,13,2,4,99]);
console.log("Ejercicio 24:", res6);

// Ejercicio 25
const sumarArray = (arrayPaSumar) => {
    let sumatorio = 0;
    for(let i = 0; i < arrayPaSumar.length; i++){
      sumatorio += arrayPaSumar[i];
    }
    return sumatorio;
}
const res7 = sumarArray([1,2,3,4]);
console.log("Ejercicio 25:", res7);

// Ejercicio 26
const multiplicarArray = (elUltimoArrayGraciasADios) => {
    let multiplicatorio = 1;
    for (let i = 0; i < elUltimoArrayGraciasADios.length; i++){
      multiplicatorio *= elUltimoArrayGraciasADios[i];
    }
    return multiplicatorio;
}
const res8 = multiplicarArray([2,3,4]);
console.log("Ejercicio 26:", res8);

console.log("------------------------------------------------------------------")

// ChauChat
const cargador = ["pium!","pium!","pium!","pium!","pium!","pium!","pium!"];

const chauchat = (cargador) => {
  
  for (let i = 0; i < cargador.length; i++){
    let aleatorio = Math.floor(Math.random()*11);

    if (i % 3 === 0 && i !== 0){
        console.log("");
        }
      if (aleatorio < 8){
        console.log("Illo, me he quedao pillá!");
        return;
        }
      else{
        console.log(cargador[i]);
      }  
  }  
}

chauchat(cargador);

console.log("------------------------------------------------------------------")

// Con "Else" va condicion por condicion y si alguna no se cumple cae en el "Else"
// Sacandolo fuera te aseguras de que va a pasar por todas las condiciones y sino caera en True
function isPrimeNum(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
        else {
            return true;
        }
    }; 
}

console.log(isPrimeNum(9));

function isPrimeNum2(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}

console.log(isPrimeNum2(9));