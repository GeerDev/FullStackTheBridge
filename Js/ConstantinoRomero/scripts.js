const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return `<p>${pregunta.titulo}</p>`
}

function imprimeTodasLasRespuestas(pregunta) {
  // console.log(pregunta);
  // Esto esta dentro de un bucle
  const bucle = pregunta.respuestas;
  // console.log (bucle);
  let respuesta = [];
  let resultadoFinal = "";
  for (let i = 0; i < bucle.length; i++){
    // console.log (bucle[i])
    respuesta = bucle[i];
    // console.log(respuesta);
    resultadoFinal = imprimeUnaRespuesta(respuesta);
  }
  return `Este es el resultado ${resultadoFinal}`
}

function imprimeUnaRespuesta(respuesta) {
  // console.log (respuesta);
  const guardalo1 = imprimeLabel(respuesta);
  const guardalo2 = imprimeInput(respuesta);
  return `ole ${guardalo1} ole ${guardalo2}`
}

function imprimeLabel(respuesta) {
  // console.log (respuesta.id);
  return `Hola estoy saludando desde el Label`
}

function imprimeInput(respuesta) {
  return `Hola estoy saludando desde el Input`
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);