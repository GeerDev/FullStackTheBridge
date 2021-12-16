// MAP
// Ejercicio 1
const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const result1 = numbers.map (e => e ** e)
console.log (result1)

// Ejercicio 2
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const comidas = foodList.map ((e, i) => {
  if (i == 0){
    return `Como soy de Italia, amo comer ${e}`
  } else if (i == 1) {
    return `Como soy de Japón, amo comer ${e}`
  } else if (i == 2) {
    return `Como soy de Valencia, amo comer ${e}`
  } else {
    return `Aunque no como carne, el ${e} es sabroso`
  }
})

console.log (comidas);

// Ejercicio 3
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const result2 = staff.map((e,i) => {
  const { name, role, hobbies } = e;
  const [elprimerojaja, elsegundojaja] = hobbies;
  if ( i == 0 ) {
      return `${name} es ${role} y le gusta ${elprimerojaja} y ${elsegundojaja}`
  } else if ( i == 1 ) {
      return `${name} es ${role} y le gusta ${elprimerojaja} y ${elsegundojaja}`
  } else if ( i == 2 ){
      return `${name} es ${role} y le gusta ${elprimerojaja} y ${elsegundojaja}`
  } else {
      return `${name} es ${role} y le gusta ${elprimerojaja} y ${elsegundojaja}`
  }
})
// Hacerlo con una funcion para pasarle el argumento
console.log (result2)

// FILTER
// Ejercicio 1
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtracion1 = numbers1.filter (e => e % 2 !== 0);
console.log (filtracion1)

// Ejercicio 2
const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }
];

const filtracion2 = foodList2.filter(e => e.isVeggie).map(e =>
`Que rico ${e.name} me voy a comer`
);

console.log (filtracion2);

// Ejercicio 3
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const filtracion3 = inventory.filter (e => e.price > 300)
console.log (filtracion3);

// REDUCE
// Ejercicio 1
const numeros2 = [39, 2, 4, 25, 62];

const reduce1 = numeros2.reduce ((acc, e) => acc * e)
console.log (reduce1)

// Ejercicio 2
const sentenceElements = [
  'Me',
  'llamo',
  'Ger',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const reduce2 = sentenceElements.reduce((acc, e) => `${acc} ${e}`)
console.log (reduce2)

// Ejercicio 3
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const reduce3 = books.reduce ((acc, e) => {
    if (e.category == 'code'){
    return acc + e.price;
    }
}, 0)
// JAJAJAJAJAJA el IF en el reduce NO, este código no va a funcionar...
console.log (reduce3)

const filtracion17 = books.filter (e => e.category == 'code').reduce((acc, e) => acc + e.price, 0)

console.log (filtracion17);