//
var mainEl = document.querySelector("main")
var h1El = document.querySelector("h1")
var pEl = document.querySelector("p")
var startBtnEl = document.querySelector(".start-btn")

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

//think about doing the css in js for practice
