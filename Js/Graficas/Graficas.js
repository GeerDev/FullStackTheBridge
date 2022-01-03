// Llamadas a las APIS

let titulos = []
let fecha = []
let fechaModificada = []

let nombres = []
let peliculas = []

const primeraLlamada = async () => {
    const Url1 = "https://swapi.dev/api/films/"
    const response = await fetch(Url1)
    const data = await response.json()
    const { results } = data
    return results
}

const segundaLlamada = async () => {
    const Url1 = "https://swapi.dev/api/people/"
    const response = await fetch(Url1)
    const data = await response.json()
    const { results } = data
    return results
}

// Invocacion de la primera funcion
primeraLlamada().then(x => {
    x.forEach (element => {
        titulos.push(element.title)
        fecha = [...fecha, element.release_date]        
    })

    fecha.forEach(jaja => {
        const troceada = jaja.split('-')
        fechaModificada.push(troceada[0])
    })

    const data = {
        // A labels array that can contain any sort of values
        labels: titulos,
        // Our series array that contains series objects or in this case series data arrays
        series: [
          fechaModificada
        ]
      };
    
    const options = {
        width: 600,
        height: 500
      };
      
      // Create a new line chart object where as first parameter we pass in a selector
      // that is resolving to our chart container element. The Second parameter
      // is the actual data object.
      new Chartist.Line('#chart1', data, options);

})

// Invocacion de la segunda funcion
segundaLlamada().then(x => {
    x.forEach(e => {
        nombres.push(e.name)
        peliculas.push(e.films.length)
    })

    const data = {
        // A labels array that can contain any sort of values
        labels: nombres,
        // Our series array that contains series objects or in this case series data arrays
        series: [
          peliculas
        ]
      };
    
    const options = {
        width: 600,
        height: 500,
      };
      
      // Create a new line chart object where as first parameter we pass in a selector
      // that is resolving to our chart container element. The Second parameter
      // is the actual data object.
      new Chartist.Bar('#chart2', data, options);
})












