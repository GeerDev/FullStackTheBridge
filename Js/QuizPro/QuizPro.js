import { cargarLocalStorageYPintarGrafica, cargarGrafica } from "./Componentes/GraficasQuizPro.js";

async function getQuestionsAsync() {
    try {
        let response = await fetch('https://opentdb.com/api.php?amount=5');
        let data = await response.json()

        const arrObj = data.results;

        let arrayObject = []
        
        arrObj.forEach(pregunta => {
        
            const questions = pregunta.question
            const correctAnswers = pregunta.correct_answer
            const incorrectAnswers = pregunta.incorrect_answers
            const answers = [correctAnswers, ...incorrectAnswers]
    
            const desordenado = answers.sort()

            const object = {
                questions,
                correctAnswers,
                desordenado
            }
            arrayObject = [...arrayObject, object]
        })
        return arrayObject
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

getQuestionsAsync().then(data => {

    funcionDePrueba(data[0])

    boton.addEventListener("click", () => {

        elegirCorrecta(data)
    
        if (PantallaActual < Object.keys(data).length){
            cargarDatos()
        } else {
            pantallaFinal()
        }
        
        PantallaActual++
    
    })

    const cargarPuntuacion = () => {
      puntua.style.display = "block"
      puntua.innerHTML = `Tienes estos puntos: ${puntuacion}`
    } 

    const cargarDatos = () => {
      cargarPuntuacion()
      graficaIni.style.display = "none"
      const respuestas = data[PantallaActual].desordenado
      referencia.innerHTML = `<p>${data[PantallaActual].questions}</p>`
      respuestas.forEach((elem, index) => {
          referencia.innerHTML += `<div class = cuestionario>
                                      <p class = elemento>
                                          <label for="${index}">${elem}</label>
                                          <input id="${index}" type="radio" name="bloqueQuiz" value="${elem}">
                                      </p>
                                   </div>`
      })
    
      boton.innerText = "Avance"
    }

    const pantallaFinal = () => { 
      graficaFinal.style.display = "block" 
      cargarGrafica()
      boton.style.display = "none"
      puntua.style.display = "none"
      referencia.innerHTML = `<p>Esta es la pantalla final</p>
                              <button onclick = "volverEmpezar()">Volver a empezar</button> 
                             `
      guardarLocalStorage()
    }

    const volverEmpezar = () => {
      PantallaActual = 0
      pantallaPrincipal()
      location.reload()
    }

    const guardarLocalStorage = () => {
      const date = new Date();    
      const formatDate = (date)=>{
          let formatted_date = date.getDate()
          return formatted_date;
      }
      let misObjetos = JSON.parse(localStorage.getItem('resultados')) || [];

      const objeto = {
          puntuacion,
          fecha: formatDate(date)
      }

      misObjetos.push(objeto)

      localStorage.setItem('resultados', JSON.stringify(misObjetos));
    }
})

export let PantallaActual = 0;
export let puntuacion = 0;

const referencia = document.querySelector("#container")
const boton = document.querySelector('#avanzar')
const puntua = document.querySelector("#puntuacion")
const graficaIni = document.getElementById('graficaInicial')
const graficaFinal = document.getElementById('graficaFinal')

const pantallaPrincipal = () => {
    boton.style.display = "block"
    puntua.style.display = "none"
    graficaFinal.style.display = "none"
    boton.innerText = "Empezar Juego"
    referencia.innerHTML = `<p> Hola esto es el contenido inicial </p>`
    cargarLocalStorageYPintarGrafica()
}

const elegirCorrecta = (data) => {
  const ref = document.querySelectorAll('input[name="bloqueQuiz"]');
  console.log(data)
  ref.forEach(valor => {
      if (valor.checked) {
          if (data[PantallaActual - 1].correctAnswers === valor.value) {
              puntuacion++
          } 
      }
  })
}

const funcionDePrueba = (datosDeAsincronia) => {
  console.log (datosDeAsincronia)
}

pantallaPrincipal()