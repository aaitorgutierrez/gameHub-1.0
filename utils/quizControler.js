import { showQuestion } from "../Components/quizComponents/showQuestion/showQuestion";
import { showScore } from "../Components/quizComponents/showScore/showScore";
import { questions } from "../data/quiz.data";

let questionIndex = 0;
let score = 0;

let startQuiz = () => {
  let nextButton = document.getElementById("next-button");
  questionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion(questionIndex);
};

export const resetQuestion = () => {
  const answerButton = document.getElementById("answer-buttons");
  let nextButton = document.getElementById("next-button");
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
};

export const selectAnswer = (e) => {
  const nextButton = document.getElementById("next-button");
  const answerButton = document.getElementById("answer-buttons");
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  if (questionIndex < questions.length) {
    showQuestion(questionIndex);
  } else {
    showScore(score);
  }
};
const addListeners = () => {
  const nextButton1 = document.getElementById("next-button");
  nextButton1.addEventListener("click", () => {
    if (questionIndex <= questions.length) {
      console.log("evento", questionIndex);
      handleNextButton();
    } else {
      startQuiz();
    }
    questionIndex++;
  });
};

export const quizControler = () => {
  startQuiz();
  addListeners();
};
