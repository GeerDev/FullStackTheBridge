const respuestas = {
    primera: "C",
    segunda: "A",
    tercera: "D",
}

    // Referencias al DOM
    const primeraPregunta = document.querySelectorAll('input[name="primeraPregunta"]');
    const segundaPregunta = document.querySelectorAll('input[name="segundaPregunta"]');
    const terceraPregunta = document.querySelectorAll('input[name="terceraPregunta"]');

    const botonSubmit = document.getElementById("sendbuttom");

    // Arreglo con todos los bloques de preguntas
    const Arreglo = [primeraPregunta, segundaPregunta, terceraPregunta];

    // Escuchadores para seleccionar una opción
    for (let i = 0; i < Arreglo.length; i++) {
        Arreglo[i].forEach (e => {
            e.addEventListener ("click", () => {    
                    e.parentElement.style.background = "white"
            })
        })
    }

    for (let i = 0; i < Arreglo.length; i++) {
        Arreglo[i].forEach (e => {
            e.addEventListener ("blur", () => {    
                    e.parentElement.style.background = "red"
            })
        })
    }

    // Efectos al presionar el boton de "Comprobar datos"
    botonSubmit.addEventListener("click", e => {
      e.preventDefault();
      
      // Recogemos los valores y montamos un array con ellos
      let valores = [];
      
      for (let i = 0; i < Arreglo.length; i++) {
        Arreglo[i].forEach(radio => {
            if (radio.checked) {
            const valor = radio.value;
            valores.push(valor);
            }
        })
      }

      // Validación todos los campos contestados
      if (valores.length === Object.keys(respuestas).length) {
          // Condiciones para saber si el valor es el correcto o es erroneo
            for (let i = 0; i < valores.length; i++) {
                if (valores[i] === Object.values(respuestas)[i]) {
                    // Condicion de pintar en verde
                    Arreglo[i].forEach(element => {
                        if (element.value === valores[i]) {
                            element.parentElement.style.background = "green"
                        } else {
                            element.parentElement.style.background = "red"
                        }
                    })
                } else {
                    // Condicion de pintar en rojo
                    Arreglo[i].forEach(element => {
                        if (element.checked) {
                            element.parentElement.style.background = "blue"
                        } else {
                            element.parentElement.style.background = "red"
                        }
                    })
                }
            }
      } else {
          // En el caso de no estar todos los campos rellenos, mostrar alarma
          alert ("Donde vas chaval rellena el formulario completo")
      }

    })