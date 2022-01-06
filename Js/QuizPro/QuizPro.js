async function getQuestionsAsync() {
    try {
        let response = await fetch('https://opentdb.com/api.php?amount=5');
        let data = await response.json()

        //mi array de objetos, acceder a preguntas y respuestas
        const arrObj = data.results;

        let arrayObject = []
        //iteraciones de preguntas y respuestas
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

    boton.addEventListener("click", () => {

        elegirCorrecta()
    
        if (PantallaActual < Object.keys(data).length){
            cargarDatos()
        } else {
            pantallaFinal()
        }
        
        PantallaActual++
        
    
    })

    const elegirCorrecta = () => {
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
})

let PantallaActual = 0;
let puntuacion = 0;

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

const cargarLocalStorageYPintarGrafica = () => {

    const puntuaciones = JSON.parse(localStorage.getItem('resultados')) || [];
    console.log(puntuaciones)
    const grafPunt = puntuaciones.map(e => e.puntuacion)
    const grafFecha = puntuaciones.map(e => e.fecha)

    if (puntuaciones.length === 0) {
        graficaIni.innerHTML = ``
    } else {
        var chart = new Chartist.Line('.ct-chart', {
            labels: grafFecha,
            series: [
              grafPunt
            ]
          }, {
            low: 0
          });
          
          // Let's put a sequence number aside so we can use it in the event callbacks
          var seq = 0,
            delays = 80,
            durations = 500;
          
          // Once the chart is fully created we reset the sequence
          chart.on('created', function() {
            seq = 0;
          });
          
          // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
          chart.on('draw', function(data) {
            seq++;
          
            if(data.type === 'line') {
              // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
              data.element.animate({
                opacity: {
                  // The delay when we like to start the animation
                  begin: seq * delays + 1000,
                  // Duration of the animation
                  dur: durations,
                  // The value where the animation should start
                  from: 0,
                  // The value where it should end
                  to: 1
                }
              });
            } else if(data.type === 'label' && data.axis === 'x') {
              data.element.animate({
                y: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.y + 100,
                  to: data.y,
                  // We can specify an easing function from Chartist.Svg.Easing
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'label' && data.axis === 'y') {
              data.element.animate({
                x: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 100,
                  to: data.x,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'point') {
              data.element.animate({
                x1: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                x2: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'grid') {
              // Using data.axis we get x or y which we can use to construct our animation definition objects
              var pos1Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '1'] - 30,
                to: data[data.axis.units.pos + '1'],
                easing: 'easeOutQuart'
              };
          
              var pos2Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '2'] - 100,
                to: data[data.axis.units.pos + '2'],
                easing: 'easeOutQuart'
              };
          
              var animations = {};
              animations[data.axis.units.pos + '1'] = pos1Animation;
              animations[data.axis.units.pos + '2'] = pos2Animation;
              animations['opacity'] = {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              };
          
              data.element.animate(animations);
            }
          });
          
          // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
          chart.on('created', function() {
            if(window.__exampleAnimateTimeout) {
              clearTimeout(window.__exampleAnimateTimeout);
              window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
          });      
    }
}

pantallaPrincipal()

const cargarPuntuacion = () => {
    puntua.style.display = "block"
    puntua.innerHTML = `Tienes estos puntos: ${puntuacion}`
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
        let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
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

const cargarGrafica = () => {
    let respuestasIncorrectas = PantallaActual - puntuacion
    var chart = new Chartist.Pie('.ct-chart2', {
        series: [puntuacion, respuestasIncorrectas ],
        labels: [`Correctas: ${puntuacion}`, `Incorrectas: ${respuestasIncorrectas}`]
      }, {
        donut: true,
        showLabel: true
      });
      
      chart.on('draw', function(data) {
        if(data.type === 'slice') {
          // Get the total path length in order to use for dash array animation
          var pathLength = data.element._node.getTotalLength();
      
          // Set a dasharray that matches the path length as prerequisite to animate dashoffset
          data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });
      
          // Create animation definition while also assigning an ID to the animation for later sync usage
          var animationDefinition = {
            'stroke-dashoffset': {
              id: 'anim' + data.index,
              dur: 1000,
              from: -pathLength + 'px',
              to:  '0px',
              easing: Chartist.Svg.Easing.easeOutQuint,
              // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
              fill: 'freeze'
            }
          };
      
          // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
          if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
          }
      
          // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
          data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
          });
      
          // We can't use guided mode as the animations need to rely on setting begin manually
          // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
          data.element.animate(animationDefinition, false);
        }
      });
      
      // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
      chart.on('created', function() {
        if(window.__anim21278907124) {
          clearTimeout(window.__anim21278907124);
          window.__anim21278907124 = null;
        }
        window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
      });
}



