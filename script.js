// make quiz start when you hit start quiz
// ask questions with multiple answers
// make it tell you when your answer is wrong or right
// make the score change when answer is right
// tell you your score when you finish.
// time you, tell you how much time you have left and when time runs out end quiz.

let startButton = document.getElementById("start-quiz")
let answerBtnsElement = document.getElementById("answer-btns")
let questionBox = document.getElementById("questions-in-this-box")
let questionElement = document.getElementById("question")

let currentQuestion = 0;
let score = 0;

startButton.addEventListener('click', startQuiz)
// starts the quiz hides the start butten and shows the question and answer buttons
function startQuiz(){
    console.log("Quiz has started")
    startButton.classList.add("hide")
    answerBtnsElement.classList.remove("hide")
    questionBox.classList.remove("hide")
    questionElement.classList.remove("hide")
    genNextQuestion()

}

function genNextQuestion(){
    createQuestion(myQuestions[currentQuestion])

}

// generates the questions
function createQuestion(myQuestions){
  questionElement.innerHTML = myQuestions.question
  // creates buttons for each answer
  question.answers.forEach (answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    // checks if the answer is correct
    if(answer.correct){
       button.dataset.correct = answer.correct
    }
  });
  button.addEventListener('click', selectOption)
  answerBtnsElement.appendChild(button)
}

function selectOption(){

}
function endQuiz(){

}
console.log(myQuestions)
// list of questions to be asked
let myQuestions = [
    {
      question: "What order does the OSI model go in?",
      // Physical, Data Link, Network, Transport, Session, Presentation, Application
      answers: [
          {text: "Physical, Data Link, Network, Transport, Session, Presentation, Application.", correct: true},
          {text: "Physical, Network, Data Link, Transport, Session, Presentation, Application.", correct: false},
          {text: "Physical, Data Link, Network, Session, Transport,  Presentation, Application.", correct: false},
            {text: "Data Link, Network, Transport, Session, Presentation, Application, Physical,", correct: false}
      ]
    }

]