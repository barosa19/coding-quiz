//DOM elements
var headerEl = document.querySelector("header")
var viewScoresEl = document.querySelector("#viewScores")
var timerEl = document.querySelector(".timer-count")
var mainEl = document.querySelector("main")
var IntroEl = document.querySelector(".Intro-message")
var startBtnEl = document.querySelector(".start-btn")
var questionBoxEl = document.querySelector(".question-box")
var questionPromptEl = document.querySelector(".question-prompt")
var optionsEl = document.getElementById("options")
var responseEl = document.querySelector(".response")
var highScoreformEl = document.querySelector(".highScoreform")
var scoreEl = document.querySelector(".score")
var nameInput = document.querySelector("#name-input")
var submitEl = document.querySelector("#submit")
var highScoresectionEl = document.querySelector(".highScoresection")
var highScorelistEl = document.querySelector(".highScorelist")
var returnToQuizEl = document.querySelector("#returnToQuiz")
var clearScoresEl = document.querySelector("#clearScores")

//Styling of DOM elements
mainEl.setAttribute("style", "text-align: center")
headerEl.setAttribute("style", "display: flex; justify-content: space-between; padding: .8em; font-size: 1em;")
viewScoresEl.setAttribute("style", "font-size: 1em")

// Quiz variables
var secondsLeft = 75
var ptsScored = 0
var Qindex = 0

// Initial State
var localPtsscored = localStorage.getItem(ptsScored)
localStorage.setItem("score", 0)
highScoreformEl.style.display = "none"
highScoresectionEl.style.display = "none"
var arrayOfhighscores = []

// TODO: Need to adjust formating on buttons 

function renderHighscores(){
    highScorelistEl.textContent = ""

    for (var i = 0; i < arrayOfhighscores.length; i++) {
        var li = document.createElement("li")
        li.textContent = (i+1) + "." + arrayOfhighscores[i]
        highScorelistEl.appendChild(li)
        li.setAttribute("style", " background-color: cornflowerblue; padding: .2em .6em; margin: .6em; font-size: 1.5em; color: black;")
    

    }
}

function init(){
    var storedHighscores =JSON.parse(localStorage.getItem("Highscores"))

    if (storedHighscores !=null) {
        arrayOfhighscores = storedHighscores
    }
    Qindex = 0
    renderHighscores()
}

function timer() {
    var timerInterval = setInterval(
        function () {
            secondsLeft--
            timerEl.textContent = "Time:" + secondsLeft;
            timerEl.setAttribute("style", "justify-content: right; font-size: 2em; margin: auto 0; padding-right: 1em;")

            if (secondsLeft <= 0) {
                clearInterval(timerInterval)
                quizFinished()
            }
        }, 1000);
}

function printQuestion(obj) {
    // Styling Question
    questionPromptEl.textContent = Object.values(obj)[0];
    questionPromptEl.setAttribute("style", "font-size: 3em; ")

    // creates and styles the list of options
    var arrayOfOptions = Object.values(obj)[1]; // I feel like I need to be more specific

    for (let i = 0; i < arrayOfOptions.length; i++) {
        var optionStyle = document.createElement("li")
        optionStyle.textContent = arrayOfOptions[i]
        optionsEl.appendChild(optionStyle)
        optionStyle.setAttribute("style", " background-color: navy; padding: .2em .6em; margin: .6em; border: 2px solid navy; border-radius: 10px; font-size: 2em; color: white;")
    }
}

function startQuiz() {
    IntroEl.style.display = "none"
    printQuestion(arrayOfQuestions[Qindex]);
    timer();
}

function quizFinished() {
    secondsLeft = 0
    questionBoxEl.textContent = ""
    headerEl.textContent = ""
    highScoreformEl.style.display = "initial"
    scoreEl.textContent = "Your final score is " + ptsScored + "."
}

function storeHighscores() {
    localStorage.setItem("Highscores", JSON.stringify(arrayOfhighscores))
}

function submitScore(event) {
    event.preventDefault()
    if (nameInput.value === "") {
        return;
    }

    highScoreformEl.style.display = "none"
    highScoresectionEl.style.display = "initial"
    var player = nameInput.value.trim() + "- " + ptsScored
    arrayOfhighscores.push(player)
    console.log(arrayOfhighscores)
    storeHighscores()
    renderHighscores()
}

//EVENT LISTENERS
viewScoresEl.addEventListener("click", function () {
    IntroEl.style.display = "none"
    highScoresectionEl.style.display = "initial"
})
startBtnEl.addEventListener("click", startQuiz)

    // Adds an event listener to each option
optionsEl.addEventListener("click", function (event) {
    if (event.target.textContent === arrayOfQuestions[Qindex].answers) {
        responseEl.textContent = "Right!"
        ptsScored = ptsScored + 10
        localStorage.setItem("score", ptsScored)
        console.log(ptsScored)
    }
    else {
        responseEl.textContent = "Wrong!"
        secondsLeft = secondsLeft - 10
    }
    optionsEl.textContent = ""
    Qindex++
    if (Qindex === arrayOfQuestions.length) {
        quizFinished()
    }
    else {
        printQuestion(arrayOfQuestions[Qindex])
    }
})

submitEl.addEventListener("click", submitScore)

returnToQuizEl.addEventListener("click", function () {
    location.reload()
})

clearScoresEl.addEventListener("click", function () {
    highScorelistEl.textContent = ""
    localStorage.setItem("Highscores", null)
})

init()
