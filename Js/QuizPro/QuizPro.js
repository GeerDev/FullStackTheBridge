// Imports
import { cargarLocalStorageYPintarGrafica, cargarGrafica } from "./Componentes/GraficasQuizPro.js";

// Global variables
export let Screen = 0;
export let score = 0;

// DOM references
const referencia = document.querySelector("#container")
const boton = document.querySelector('#advance')
const puntua = document.querySelector("#score")
export const graficaIni = document.getElementById('graphInitial')
const graficaFinal = document.getElementById('graphFinal')

// Function declaration
const pantallaPrincipal = () => {
    boton.style.display = "block"
    puntua.style.display = "none"
    graficaFinal.style.display = "none"
    boton.innerText = "Empezar Juego"
    referencia.innerHTML = `<p class = "container_p"> ¡Welcome to the quiz! </p>`
    cargarLocalStorageYPintarGrafica()
}

const cargarPuntuacion = () => {
    puntua.style.display = "block"
    puntua.innerHTML = `Tienes estos puntos: ${score}`
  } 

const cargarDatos = (data) => {
    cargarPuntuacion()
    graficaIni.style.display = "none"
    const respuestas = data[Screen].desordenado
    referencia.innerHTML = `<p class = "question_p">${data[Screen].question}</p>`
    respuestas.forEach((elem, index) => {
        referencia.innerHTML += `<div class = cuestionario>
                                    <p class = elemento>
                                        <label for="${index}">${elem}</label>
                                        <input id="${index}" type="radio" name="bloqueQuiz" value="${elem}">
                                    </p>
                                 </div>`
    })
  
    boton.innerText = "Siguiente"

    const answersref = document.querySelectorAll('input[name="bloqueQuiz"]');
 
       answersref.forEach (e => {
          e.addEventListener ("click", () => {    
                  e.parentElement.style.background = "orange"
          })
       })
       answersref.forEach (e => {
          e.addEventListener ("blur", () => {    
                  e.parentElement.style.background = "#074566"
          })
       })
  }

const elegirCorrecta = (data) => {
    const ref = document.querySelectorAll('input[name="bloqueQuiz"]');
    console.log(data)
    ref.forEach(valor => {
      if (valor.checked) {
          if (data[Screen - 1].correct_answer === valor.value) {
              score++
          } 
      }
  })
}

const volverEmpezar = () => {
    Screen = 0
    pantallaPrincipal()
    location.reload()
  }

const pantallaFinal = () => { 
    graficaFinal.style.display = "block" 
    cargarGrafica()
    boton.style.display = "none"
    puntua.style.display = "none"
    referencia.innerHTML = `<p class = "container_p">Ojo, aquí van tus resultados!</p>
                            <button class="container_advance" onclick="volverEmpezar()">Otro game</button> 
                            `
    guardarLocalStorage()
}

const guardarLocalStorage = () => {
    const date = new Date();    
    const formatDate = (date)=>{
        let formatted_date = `${date.getHours()}:${date.getMinutes()}`
        return formatted_date;
    }
    let misObjetos = JSON.parse(localStorage.getItem('resultados')) || [];

    const objeto = {
        score,
        fecha: formatDate(date)
    }

    misObjetos.push(objeto)

    localStorage.setItem('resultados', JSON.stringify(misObjetos));
  }

// Better Call Axios
async function getQuestionsAsync() {
    try {
        let response = await axios('https://opentdb.com/api.php?amount=5');
        let data = await response.data

        const arrObj = data.results;

        let arrayObject = []
        
        arrObj.forEach(pregunta => {

            const {question, correct_answer, incorrect_answers} = pregunta
            const answers = [correct_answer, ...incorrect_answers]
    
            const desordenado = answers.sort()

            const object = {
                question,
                correct_answer,
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

// Main thread
pantallaPrincipal()

getQuestionsAsync().then(data => {

    boton.addEventListener("click", () => {

        elegirCorrecta(data)
    
        if (Screen < Object.keys(data).length){
            cargarDatos(data)
        } else {
            pantallaFinal()
        }
        
        Screen++
    
    })
})