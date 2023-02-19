//DOM elements
var mainEl = document.querySelector("main")
var headerEl = document.querySelector("header")
var timerEl = document.querySelector(".timer-count")
var IntroEl = document.querySelector(".Intro-message")
var h1El = document.querySelector("h1")
var pEl = document.querySelector("p")
var startBtnEl = document.querySelector(".start-btn")
var questionBoxEl = document.querySelector(".question-box")
var questionPromptEl = document.querySelector(".question-prompt")
var optionsEl = document.getElementById("options")

//Styling of DOM elements
mainEl.setAttribute("style", "text-align: center")
headerEl.setAttribute("style", "display: flex; justify-content: space-between; padding: 1em; font-size: 1.5em;")
h1El.setAttribute("style", "font-size: 4em")
pEl.setAttribute("style", "font-size: 2em; margin: 5% 20%")
startBtnEl.setAttribute("style", "font-size: 2em; background-color: green")
optionsEl.setAttribute("style", "")

var secondsLeft = 75
var ptsScored = 0
var Qindex = 0
var selectedResponse = document.createElement("p")
    questionBoxEl.appendChild(selectedResponse)

function timer() {
    var timerInterval = setInterval(
        function () {
            secondsLeft--
            timerEl.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(timerInterval)
                timerEl.textContent = ""
                questionBoxEl.remove()
            }
        }, 1000);
}

function clearPrompt() {
    IntroEl.remove()
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
        optionStyle.setAttribute("style", " background-color: navy; padding: .2em .6em; margin: .6em; border: 2px solid navy; border-radius: 10px; font-size: 1.5em; color: white;")
    }
}

function startQuiz() {
    clearPrompt();
    printQuestion(arrayOfQuestions[Qindex]);
    timer();
}

startBtnEl.addEventListener("click", startQuiz)

// Adds an event listener to each option
optionsEl.addEventListener("click", function (event) {

    if (event.target.textContent === arrayOfQuestions[Qindex].answers) {
        selectedResponse.textContent = "Right!"
        ptsScored = ptsScored + 10
        console.log(ptsScored)
    }
    else {
        selectedResponse.textContent = "Wrong!"
        secondsLeft = secondsLeft - 10
    }
    optionsEl.textContent = ""
    Qindex++

    if (Qindex === arrayOfQuestions.length){
        secondsLeft = 0
        questionBoxEl.textContent = ""}
        else {
            printQuestion(arrayOfQuestions[Qindex]) 
        }
})