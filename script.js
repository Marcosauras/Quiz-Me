// make quiz start when you hit start quiz
// ask questions with multiple answers
// make it tell you when your answer is wrong or right
// make the score change when answer is right
// tell you your score when you finish.
// time you, tell you how much time you have left and when time runs out end quiz.

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");

let currentQuestion= {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let optionsAvailable =[]
// questions being asked
let questions = [
    {
        question: "what is 3 + 3?",
        choice1: "3",
        choice2: "4",
        choice3: "5",
        choice4: "6",
        answer: 4,
    },
    {
        question: "What is a DBO at Target?",
        choice1: "Design Business Operator",
        choice2: "Designated Business Operator",
        choice3: "Deranged Business Operation",
        choice4: "Designer with BO",
        answer: 2,
    },
    {
        question: "what is 10 * 10?",
        choice1: "0100",
        choice2: "101",
        choice3: "1000",
        choice4: "100",
        answer: 4,
    },
    {
        question: "what is 9 * 9?",
        choice1: "81",
        choice2: "99",
        choice3: "18",
        choice4: "89",
        answer: 1,
    }
]
// how many points per right
let SCORE_POINTS = 25
// how many questions
let MAX_QUESTIONS = 4
// starts the quiz
startQuiz = () => {
    questionCounter = 0
    score = 0
    optionsAvailable = [...questions]
    getNewQuestion()
}

function getNewQuestion(){
    if(optionsAvailable.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    let questionsIndex = Math.floor(Math.random() * optionsAvailable.length)
    currentQuestion = optionsAvailable[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    optionsAvailable.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)return
        acceptingAnswers = false
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion ? 'correct':
        'incorrect'
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerHTML = score
}

startQuiz()
