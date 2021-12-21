// Obtener Pokemon de manera aleatoria - Name y Image
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min)

async function getUserAsync() 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomArbitrary(1, 901)}`);
  let data = await response.json()
  const { name, sprites } = data;
  const { back_default, front_default} = sprites;
  // console.log (name, back_default, front_default);
  const referencia = document.getElementById('contenedor')
  referencia.innerHTML = `<p>${name}</p>
                          <div class = "colocar">
                          <img src="${back_default}" width="200" height="300">
                          <img src="${front_default}" width="200" height="300">
                          </div>`
  return referencia;
}

getUserAsync()
  .then()
  .catch(error => console.log("hubo un error"+error));

// Batalla Perritos vs Pokemones
// Perrito
async function getPerritoAsync() 
{
  try {
  let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  let data = await response.json()
  const { message } = data;
  const name = message.split('/')
  const miPerrito = {name: name[4], imagen: message}
  return miPerrito;
  }
  catch (error) { 
    console.log(`ERROR: ${error.stack}`);
  }
}

// Pokemito
async function getPokemitoAsync() 
{
  try {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomArbitrary(1, 901)}`);
  let data = await response.json()
  const { name, sprites } = data;
  const {front_default} = sprites;
  const miPokemito = {name: name, imagen: front_default}
  return miPokemito;
  }
  catch (error) { 
    console.log(`ERROR: ${error.stack}`);
  }
}

const theLastBattle = async () => {
     
      const Pokemon = await getPokemitoAsync().then();
      const Perrito = await getPerritoAsync().then(data => data);

    //   console.log (Pokemon)
    //   console.log (Perrito)

      const element = `<div class = "Primero">
                       <p class = "separador">${Pokemon.name} VS ${Perrito.name}</p>
                       </div>
                       <div class = "Segundo">
                       <img src="${Pokemon.imagen}" width="200" height="300">
                       <img src="${Perrito.imagen}" width="200" height="300">
                       </div>`

      return element;

}

theLastBattle().then(data => {
    const element = document.getElementById('contenedor2');
    element.innerHTML = data;
})
