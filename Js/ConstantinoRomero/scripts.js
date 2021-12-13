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
  return `<p>${pregunta.titulo}</p>`;
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
    resultadoFinal += imprimeUnaRespuesta(respuesta);
  }
  console.log(resultadoFinal);
  return `${resultadoFinal}`;
}

function imprimeUnaRespuesta(respuesta) {
  // console.log (respuesta);
  const guardalo1 = imprimeLabel(respuesta);
  // console.log (guardalo1);
  const guardalo2 = imprimeInput(respuesta);
  // console.log (guardalo2);
  return `<p> ${guardalo1}${guardalo2} </p>`;
}

function imprimeLabel(respuesta) {
  // console.log (respuesta.id);
  const {label, id} = respuesta;
  return `<label for = "${id}">${label}</label>`;
}

function imprimeInput(respuesta) {
  const {id, name, value} = respuesta;
  return `<input id = "${id}" name = "${name}" type = "radio" value = "${value}">`;
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);