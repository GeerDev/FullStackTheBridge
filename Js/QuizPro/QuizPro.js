import { loadLocalStorageAndPaintGraph, loadGraph } from "./Components/GraphsQuizPro.js";

export let Screen = 0;
export let score = 0;

const reference = document.querySelector("#container")
const button = document.querySelector('#advance')
const play = document.querySelector("#score")
export const graphIni = document.getElementById('graphInitial')
const graphEnd = document.getElementById('graphFinal')

const mainScreen = () => {
    button.style.display = "block"
    play.style.display = "none"
    graphEnd.style.display = "none"
    button.innerText = "Start Game"
    reference.innerHTML = `<p class = "container_p"> ¡Welcome to the quiz! </p>`
    loadLocalStorageAndPaintGraph()
}

const loadScore = () => {
    play.style.display = "block"
    play.innerHTML = `You have these points: ${score}`
  } 

const loadData = (data) => {
    loadScore()
    graphIni.style.display = "none"
    const answers = data[Screen].disordered
    reference.innerHTML = `<p class = "question_p">${data[Screen].question}</p>`
    answers.forEach((elem, index) => {
        reference.innerHTML += `<div class = quiz>
                                    <p class = element>
                                        <label for="${index}">${elem}</label>
                                        <input id="${index}" type="radio" name="bloqueQuiz" value="${elem}">
                                    </p>
                                 </div>`
    })
  
    button.innerText = "Next"

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

const chooseCorrect = (data) => {
    const ref = document.querySelectorAll('input[name="bloqueQuiz"]');
    ref.forEach(valor => {
      if (valor.checked) {
          if (data[Screen - 1].correct_answer === valor.value) {
              score++
          } 
      }
  })
}

const startAgain = () => {
    Screen = 0
    mainScreen()
    location.reload()
  }

const endScreen = () => { 
    graphEnd.style.display = "block" 
    loadGraph()
    button.style.display = "none"
    play.style.display = "none"
    reference.innerHTML = `<p class = "container_p">Here you have your results!</p>
                            <button class="container_advance" onclick="startAgain()">Play Again</button> 
                            `
    saveLocalStorage()
}

const saveLocalStorage = () => {
    const date = new Date();    
    const formatDate = (date)=>{
        let formatted_date = `${date.getHours()}:${date.getMinutes()}`
        return formatted_date;
    }
    let myObjects = JSON.parse(localStorage.getItem('results')) || [];

    const object = {
        score,
        date: formatDate(date)
    }

    myObjects.push(object)

    localStorage.setItem('results', JSON.stringify(myObjects));
  }

async function getQuestionsAsync() {
    try {
        let response = await axios('https://opentdb.com/api.php?amount=5');
        let data = await response.data

        const arrObj = data.results;

        let arrayObject = []
        
        arrObj.forEach(p => {

            const {question, correct_answer, incorrect_answers} = p
            const answers = [correct_answer, ...incorrect_answers]
    
            const disordered = answers.sort()

            const object = {
                question,
                correct_answer,
                disordered
            }
            arrayObject = [...arrayObject, object]
        })
        return arrayObject
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

mainScreen()

getQuestionsAsync().then(data => {

    button.addEventListener("click", () => {

        chooseCorrect(data)
    
        if (Screen < Object.keys(data).length){
            loadData(data)
        } else {
            endScreen()
        }
        
        Screen++
    
    })
})