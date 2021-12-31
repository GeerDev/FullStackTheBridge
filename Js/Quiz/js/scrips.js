const respuestas = {
    firstQuestion: "Inca",
    secondQuestion: "Budapest",
    thirdQuestion: "Suiza",
    fourthQuestion: 1997,
    fifthQuestion: "Harry Potter",
}
    const v = document.querySelectorAll('input[name="firstQuestion"]');
    const w = document.querySelectorAll('input[name="secondQuestion"]');
    const x = document.querySelectorAll('input[name="thirdQuestion"]');
    const y = document.querySelectorAll('input[name="fourthQuestion"]');
    const z = document.querySelectorAll('input[name="fifthQuestion"]');

    // console.log("lo primero", x)


    const botonsubmit = document.getElementById("sendbuttom");

    console.log(botonsubmit)

    const Arreglo = [v, w, x, y, z];


  botonsubmit.addEventListener("click", e => {
      e.preventDefault();
      let valores = [];
      for (let i = 0; i < Arreglo.length; i++) {
        Arreglo[i].forEach(radio=>{
            if (radio.checked) {
            const valor = radio.value;
            valores.push(valor)
            // console.log(valor)
            }
            else {
              alert("Name must be filled out")
            };
          })
      }
      console.log(valores);
  })