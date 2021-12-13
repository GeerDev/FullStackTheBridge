// Ejercicio 1
const Coche = {
  marca: 'Ford',
  modelo: 'Focus',
  matricula: '3419GHA'
}
console.log("Ejercicio 1:", Coche);

// Ejercicio 2
const Casa = {
  codPostal: 46321,
  calle: 'Piruleta',
  portal: 2,
  piso: '2A'
}
console.log("Ejercicio 2:", Casa);

// Ejercicio 3
const FullStackDeveloper = {
  lenguajes: ['Javascript', 'C#', 'MySQL'],
  proyectos: ['blog de desarrollo', 'e-commerce']
}
console.log("Ejercicio 3:", FullStackDeveloper);

// Ejercicio 4
const Perro = {
  nombre: 'Kiara',
  raza: 'Labradora',
  color: 'Blanco',
  edad: 5,
  ladrar: function(){
    console.log('Guau!Grrrr');
  },
  popo(){
    return Math.random()*3;
  }
}
console.log("Ejercicio 4:", Perro.popo());

// Ejercicio 5
const Portatil = {
  marca: 'Hp'
}
const marcaPortatil = Portatil.marca;
console.log("Ejercicio 5:", marcaPortatil, Portatil);

// Ejercicio 6
const marcaPortatil2 = Portatil['marca'];
console.log("Ejercicio 6:", marcaPortatil2, Portatil);

// Ejercicio 7
const Concierto = {
  grupos: ['Vetusta Mola', 'Chimobayo', 'ACDC']
}
const grupos = Concierto.grupos;
console.log("Ejercicio 7:", grupos);

// Ejercicio 8
const Led = {
  rojo: 'rojo',
  verde: 'verde',
  azul: 'azul'
}
let RGB2 = []
for (elemento in Led){
  RGB2.push(Led[elemento]);
}
const RGB = Object.values(Led);
console.log("Ejercicio 8:", RGB2);

// Ejercicio 9
Portatil.modelo = 'El más caro';
Portatil.modelo = 'P345';
console.log("Ejercicio 9:", Portatil);

// Ejercicio 10
Concierto.cartelera = "Guns N'Roses"; 
console.log("Ejercicio 10:", Concierto);

// Ejercicio 11
Concierto.fecha = new Date();
console.log("Ejercicio 11:", Concierto);

// Ejercicio 12
const Impresora = {
  imprimiendo: 'Estoy imprimiendo'
}
Impresora.imprimiendo = {
  nombredelarchivo: 'Js',
  copias: 3,
  numPaginas: 17
}
console.log("Ejercicio 12:", Impresora);

// Ejercicio 13
const Noticia = {
  titular: 'Arde el Ceu en el centro de Valencia',
  cuerpo: 'Ante un incendio inesperado JavaScript no salvo a nadie'
}
console.log("Ejercicio 13:", Noticia);

// Ejercicio 14
const Persona = {
  nombre: 'Paquito',
  apellidos: 'El Chocolatero',
  edad: 89
}
console.log("Ejercicio 14:", Persona);

// Ejercicio 15
const Avion = {
  numPasajeros: 58,
  despegar() {
    console.log('Alerta que despego!');
  },
  volar(){
    console.log('Volando voy, volando vengo');
  },
  aterrizar(){
    console.log('Ojo que nos matamos')
  }
}
console.log("Ejercicio 15:", Avion);

// Ejercicio 16
const Paquete = {
  contenido: ['navaja', 'mechero', 'ibuprofeno', 'cantimplora']
}
console.log("Ejercicio 16:", Paquete);

// Ejercicio 17
const Pais = {
  numHabitantes: 203475,
  continente: 'Africa',
  gentilicio: 'africanos'
}
console.log("Ejercicio 17:", Pais);

// Ejercicio 18
const O_Error = {
  codigo_error: 'Ojo que explotamos'
}
const almacen = O_Error.codigo_error
console.log("Ejercicio 18:", almacen);

// Ejercicio 19
const Grupo = {
  integrantes: ['Ivan', 'German', 'Data']
}
const integran = Grupo.integrantes;
console.log("Ejercicio 19:", integran);

// Ejercicio 20
Impresora.tinta = {
  rojo: 'rojo',
  verde: 'verde',
  azul: 'azul'
}
const nivelesTinta = Impresora.tinta
console.log("Ejercicio 20:", nivelesTinta);

// Ejercicio 21
const Pantalla = {
    pixeles: [[1980], [1820]]
}
console.log("Ejercicio 21:", Pantalla.pixeles[0]);

// Ejercicio 22
const Movil = {
  especificaciones: ['5G', 'Irrompible', 'Usb integrado']
}
const especificaciones = Movil.especificaciones;
console.log("Ejercicio 22:", especificaciones);

// Ejercicio 23
Grupo.numIntegrantes = 5;
console.log("Ejercicio 23:", Grupo);

// Ejercicio 24
Pantalla.dimensiones = Pantalla.pixeles;
console.log("Ejercicio 24:", Pantalla);

// Ejercicio 25
Led.encendido = false;
Led.encendido = (Led.encendido == true) ? false : true;
console.log("Ejercicio 25:", Led.encendido);

// Ejercicio 26
Movil.temperatura = '20º';
console.log("Ejercicio 26:", Movil);