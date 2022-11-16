// make quiz start when you hit start quiz
// ask questions with multiple answers
// make it tell you when your answer is wrong
// make the score change when answer is wrong
// tell you your score when you finish.
// time you, tell you how much time you have left.

const startButton = document.getElementById("start-quiz")
let answerBtns = document.getElementById('answer-btns')
let question = document.getElementById("question")

startButton.addEventListener('click', startQuiz)

function startQuiz(){
    console.log("Quiz has started")
    startButton.classList.add("hide")
    answerBtns.classList.remove('hide')
    question.classList.remove('hide')

}

function nextQuestion(){

}