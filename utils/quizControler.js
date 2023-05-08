const questions = [
    {
        questions: "¿En qué año fueron los ultimos Juegos Olímpicos",
        answers: [
            {text: "2021", correct: false},
            {text: "2020", correct: true},
            {text: "2019", correct: false},
            {text: "2022", correct: false},
        ],
    },

    {
        questions: "¿Qué cantante es famoso por tener muchos hijos?",
        answers: [
            {text: "Enrique Iglesias", correct: false},
            {text: "Becky G", correct: false},
            {text: "Julio Iglesias", correct: true},
            {text: "Omar Montes", correct: false},
        ]
    },

    {
        questions: "¿Cuál es la comunidad autónoma de España con mas vacas?",
        answers: [
            {text: "Asturias", correct: false},
            {text: "Castilla y León", correct: true},
            {text: "Galicia", correct: false},
            {text: "Vizcaya", correct: false},
        ]
    },

    {
        questions: "¿Cuantos atomos tiene el H2O?",
        answers: [
            {text: "1", correct: false},
            {text: "0", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
        ]
    }
]


let questionIndex = 0;
let score = 0;

let startQuiz = () => {
    let nextButton = document.getElementById("next-button");
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion() 
}

let showQuestion = () =>{
    const answerButton = document.getElementById("answer-buttons")
    const questionElement = document.getElementById("question")
    let nextButton = document.getElementById("next-button");
    resetQuestion()
    let currentQuestion = questions[questionIndex]
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions
    console.log(questionElement)
    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("buttonQuiz")
        answerButton.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

const resetQuestion = () =>{
    const answerButton = document.getElementById("answer-buttons");
    let nextButton = document.getElementById("next-button");
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
const selectAnswer = (e) =>{
    const nextButton = document.getElementById("next-button")
    const answerButton = document.getElementById("answer-buttons")
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect){
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}
const showScore = () =>{
    const nextButton = document.getElementById("next-button")
    const questionElement = document.getElementById("question")
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play again"
    nextButton.style.display = "block"
}
const handleNextButton = () => {
    questionIndex++
    if(questionIndex < questions.length){
        showQuestion()
    }else {
        showScore()
    }
}
const addListeners = () => {
    const nextButton1 = document.getElementById("next-button");
    nextButton1.addEventListener("click", ()=>{
        if (questionIndex < questions.length) {
           handleNextButton()
        }else {
            startQuiz()
        }
    })  
}

export const quizControler = () =>{
    startQuiz();
    addListeners();
    showScore()
}