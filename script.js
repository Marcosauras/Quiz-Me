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
let highScore = document.getElementById("highscore")
const button = document.createElement('button')

let currentQuestion = 0;
let score = 0;

let myQuestions = [

    // Physical, Data Link, Network, Transport, Session, Presentation, Application
  {
    question: "What order does the OSI model go in?",
    answers: [
      {text: "Physical, Data Link, Network, Transport, Session, Presentation, Application.", correct: true},
      {text: "Physical, Network, Data Link, Transport, Session, Presentation, Application.", correct: false},
      {text: "Physical, Data Link, Network, Session, Transport,  Presentation, Application.", correct: false},
      {text: "Data Link, Network, Transport, Session, Presentation, Application, Physical.", correct: false}
    ]
  },
  {
    question: "What order does the OSI model go in?",
    answers: [
      {text: "Physical, Data Link, Network, Transport, Session, Presentation, Application.", correct: true},
      {text: "Physical, Network, Data Link, Transport, Session, Presentation, Application.", correct: false},
      {text: "Physical, Data Link, Network, Session, Transport,  Presentation, Application.", correct: false},
      {text: "Data Link, Network, Transport, Session, Presentation, Application, Physical.", correct: false}
    ]
  }
]
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
  if (myQuestions.length < currentQuestion + 1){
    endQuiz()
  }else{
      // runs reset question
    resetQuestion()
  // runs create question on the next question
   createQuestion(myQuestions[currentQuestion])
  }


}
// generates the questions
function createQuestion(myQuestions){
  questionElement.innerHTML = myQuestions.question
  // creates buttons for each answer
  myQuestions.answers.forEach (answers => {

    button.innerText = answers.text
    button.classList.add('btn');
    button.classList.add('btn-style');
    // checks if the answer is correct
    if(answers.correct){
       button.dataset.correct = answers.correct
    }
    button.addEventListener('click', selectOption);
    answerBtnsElement.appendChild(button);
  });
}
function resetQuestion(){
  while(answerBtnsElement.firstChild){
  answerBtnsElement.removeChild(answerBtnsElement.firstChild)
  }
}
// finds out if the answer choosen was right or wrong
function selectOption(e){
  let answerSelected = e.target
  let correct = answerSelected.dataset.correct
  setCorrectStatus(document.body, correct)
  Array.from(answerBtnsElement.children).forEach(button => {
    setCorrectStatus(button, button.dataset.correct)
  })
  console.log(currentQuestion)
  console.log(myQuestions.length)

  

}

function setCorrectStatus(element, correct){
  if (correct) {
    element.classList.add('correct')
    score = score + 100
    currentQuestion+1;
    }else {
    element.classList.add('wrong')
    currentQuestion+1;
  }
  genNextQuestion();

}
function endQuiz(){
  questionElement.classList.add('hide')
  button.classList.add('hide');
  console.log("thank you for playing");
  console.log(score)
}