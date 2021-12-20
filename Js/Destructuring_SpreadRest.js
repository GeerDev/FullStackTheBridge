// Destructuring
// Ejercicio 1
const empleados = [
  {"name":"Luis", "email":"Luis@gmail.com"},
  {"name":"Ana", "email":"Ana@gmail.com"},
  {"name":"Andrea", "email":"Andrea@gmail.com"}
]

const [Luisito, Anita, Andreita] = empleados;
console.log ("Ejercicio 1 Destructuring:", Anita);

const {name, email} = Luisito;
console.log ("Ejercicio 1 Destructuring:", email);

// Ejercicio 2
let a = 5;
let b = 3;

[a, b] = [b, a];
console.log("Ejercicio 2 Destructuring:", a);
console.log("Ejercicio 2 Destructuring:", b);

// Ejercicio 3
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32
};
const {today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES;
console.log("Ejercicio 3 Destructuring:", maximaHoy)
console.log("Ejercicio 3 Destructuring:", maximaManana)

console.log ("---------------------------------------------------------------")

// Spread/Rest
// Ejercicio 1
const sumEveryOther = (...numeros) => {
  let almacen = 0;
  for (elemento of numeros) {
     almacen += elemento;
  }
  return almacen
}
console.log("Ejercicio 1 Spread/Rest:", sumEveryOther(6, 8, 2));

// Ejercicio 2
const addOnlyNums = (...cositas) => {
  const filtro = cositas.filter(e => typeof e === 'number')
  let almacen2 = 0;
  for (elemento of filtro) {
     almacen2 += elemento;
  }
  return almacen2
}
console.log("Ejercicio 2 Spread/Rest:", addOnlyNums(1, 'perro', 2, 4));

// Ejercicio 3
const countTheArgs = (...argumentos) => {
  return argumentos.length
}
console.log("Ejercicio 3 Spread/Rest:", countTheArgs('gato', 'perro', 'pollo', 'oso'));

// Ejercicio 4
const combineTwoArrays = (arr1, arr2) => {
  const theMagic = [...arr1, ...arr2];
  return theMagic
}
console.log("Ejercicio 4 Spread/Rest:", combineTwoArrays([1,3], [2,5,9]))

// Ejercicio 5
const onlyUniques = (...duplicados) => {
  const laLimpieza = duplicados.filter((e,i) => {
    return duplicados.indexOf(e) === i;
  })
  return laLimpieza;
}
console.log ("Ejercicio 5 Spread/Rest:", onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));

// Ejercicio 6
const combineAllArrays = (...muchosArrays) => {
  const soloUnResultado = muchosArrays.reduce((a, e) => {
    return [...a, ...e];
  }, [])
  return soloUnResultado;
}
console.log("Ejercicio 6 Spread/Rest:", combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]))

// Ejercicio 7
const sumAndSquare = (...params) => {
  const valor1 = params.filter(e => typeof e === 'number');
  const valor2 = valor1.map(e => e ** 2);
  const valor3 = valor2.reduce((a, e) => a + e);
  return valor3;
  // Lo puedes concatenar todo y no utilizar tantas variables, pues tambien
}
console.log("Ejercicio 7 Spread/Rest:", sumAndSquare(4, 8, 1, 2, "churro", 2));

