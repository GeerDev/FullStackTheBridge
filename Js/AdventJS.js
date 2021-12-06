// Adviento 1
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

function contarOvejas(ovejas) {
    const resultado = ovejas.filter(element => element.color == 'rojo' && element.name.toLowerCase().includes('n') && element.name.toLowerCase().includes('a'));
    return resultado
}
  
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// Adviento 2
var a;
console.log(a)


console.log(b)