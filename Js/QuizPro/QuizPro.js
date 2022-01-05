async function getQuestionsAsync() {
    try {
        let response = await fetch('https://opentdb.com/api.php?amount=5');
        let data = await response.json()
        // console.log(data)

        //mi array de objetos, acceder a preguntas y respuestas
        const arrObj = data.results;
        // console.log(arrObj)

        let arrayObject = []
        //iteraciones de preguntas y respuestas
        arrObj.forEach(pregunta => {
            // console.log(pregunta)
            const questions = pregunta.question
            const correctAnswers = pregunta.correct_answer
            const incorrectAnswers = pregunta.incorrect_answers
            // console.log(questions)
            // console.log(correctAnswers)
            // console.log(incorrectAnswers)
            const object = {
                questions,
                correctAnswers,
                incorrectAnswers
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

    boton.addEventListener("click", () => {

        elegirCorrecta()
    
        console.log (PantallaActual)
    
        if (PantallaActual < Object.keys(Objeto).length + 1){
            cargarDatos()
        } else {
            pantallaFinal()
        }
        
        PantallaActual++
    
    })

    const elegirCorrecta = () => {
        
    }
    
    const cargarDatos = () => {
        limpiarDatos()
        referencia.innerHTML = `<p>${data[PantallaActual].questions}</p>
                                <div class = cuestionario>
                                    <p class = elemento>
                                        <label for="a">La A</label>
                                        <input id="a" type="radio" name="bloqueQuiz" value="A">
                                    </p>
                                
                                    <p class = elemento>
                                        <label for="b">La B</label>
                                        <input id="b" type="radio" name="bloqueQuiz" value="B">
                                    </p>
                                
                                    <p class = elemento>
                                        <label for="c">La C</label>
                                        <input id="c" type="radio" name="bloqueQuiz" value="C">
                                    </p>
                                
                                    <p class = elemento>
                                        <label for="d">La D</label>
                                        <input id="d" type="radio" name="bloqueQuiz" value="D">
                                    </p>
                                </div>`
        boton.innerText = "Avance"
    }

    const limpiarDatos = () => {
        console.log ("Estoy limpiando datos")
    }
})

let PantallaActual = 0;
let puntuacion = 0;

const referencia = document.querySelector("#container")
const boton = document.querySelector('#avanzar')


const pantallaPrincipal = () => {
    boton.style.display = "block"
    boton.innerText = "Empezar Juego"
    referencia.innerHTML = `<p> Hola esto es el contenido inicial </p>`
}

pantallaPrincipal()

const pantallaFinal = () => {
    boton.style.display = "none"
    referencia.innerHTML = `<p>Esta es la pantalla final</p>
                            <button onclick = "volverEmpezar()">Volver a empezar</button> 
                           `
}

const volverEmpezar = () => {
    PantallaActual = 0
    pantallaPrincipal()
}



