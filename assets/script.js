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
/* questionBoxEl.setAttribute("style", "text-align:left;") */

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


/* function startQuiz(){
    styleQuestion()

} */
styleQuestion(question2)