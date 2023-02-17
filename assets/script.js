//DOM elements
var mainEl = document.querySelector("main")
var headerEl = document.querySelector("header")
var timerEl = document.querySelector(".timer-count")
var h1El = document.querySelector("h1")
var pEl = document.querySelector("p")
var startBtnEl = document.querySelector(".start-btn")
var questionBoxEl = document.querySelector(".question-box")

//Styling of DOM elements
mainEl.setAttribute("style", "text-align: center")
headerEl.setAttribute("style", "display: flex; justify-content: space-between; padding: 1em; font-size: 1.5em;")
h1El.setAttribute("style", "font-size: 4em")
pEl.setAttribute("style", "font-size: 2em; margin: 5% 20%")
startBtnEl.setAttribute("style", "font-size: 2em; background-color: green")

var secondsLeft = 75

//testing link of questions js
console.log(question1)
console.log(question1.question)
console.log(question1["question"])
console.log(question1.options)
console.log(question1.answers)
console.log(question1.options[0]) //how to access array in object

function timer() {
    var timerInterval = setInterval(
        function () {
            secondsLeft--
            timerEl.textContent = "Time:" + secondsLeft;

            if (secondsLeft === 0) {
                //TODO: if question is wrong than we need to drop it 10 seconds and 
                // when it hits zero I need to go to high score
                // Need to clear interval if all questions are answered
                clearInterval(timerInterval)
            }
        }, 1000);
}

function clearPrompt(){
    // need to create a div to remove that entire div
}

function styleQuestion(obj) {
    // Styling Question
    var questionStyle = document.createElement("h2");
    questionStyle.textContent = Object.values(obj)[0];
    questionBoxEl.appendChild(questionStyle);
    questionStyle.setAttribute("style", "font-size: 3em; ")

    // Styling Options
    var optionStyleparent = document.createElement("ul")
    questionBoxEl.appendChild(optionStyleparent)

    function grabOptions(arr) {
        for (let i = 0; i < arr.length; i++) {
            var optionStyle = document.createElement("li")
            optionStyle.textContent = arr[i]
            optionStyleparent.appendChild(optionStyle)
            //TODO: Need to make this inline
            optionStyle.setAttribute("style", " display: inline; ; background-color: navy; padding: .2em .6em; margin: .6em; border: 2px solid navy; border-radius: 10px; font-size: 2em; color: white;")
        }
    }

    grabOptions(Object.values(obj)[1])
}

function startQuiz() {
    clearPrompt();
    styleQuestion(question1);
    timer();
}

startBtnEl.addEventListener("click", startQuiz)