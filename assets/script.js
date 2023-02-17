//
var mainEl = document.querySelector("main")
var h1El = document.querySelector("h1")
var pEl = document.querySelector("p")
var startBtnEl = document.querySelector(".start-btn")
var questionBoxEl = document.querySelector(".question-box")

mainEl.setAttribute("style", "text-align: center")
h1El.setAttribute("style", "font-size: 4em")
pEl.setAttribute("style", "font-size: 2em; margin: 5% 20%")
startBtnEl.setAttribute("style", "font-size: 2em; background-color: green")



//testing link of questions js
console.log(question1)
console.log(question1.question)
console.log(question1["question"])
console.log(question1.options)
console.log(question1.answers)
console.log(question1.options[0]) //how to access array in object


function styleQuestion(obj) {
    // Styling Question
    var questionStyle = document.createElement("h2");
    questionStyle.textContent = Object.values(obj)[0];
    questionBoxEl.appendChild(questionStyle);

    // Styling Options
    var optionStyleparent = document.createElement("ul")
    questionBoxEl.appendChild(optionStyleparent)

    function grabOptions(arr) {
        for (let i = 0; i < arr.length; i++) {
            var optionStyle = document.createElement("li")
            optionStyle.textContent = arr[i]
            optionStyleparent.appendChild(optionStyle)
        }
    }

    grabOptions(Object.values(obj)[1])
}


/* function startQuiz(){
    styleQuestion()

} */
styleQuestion(question1)