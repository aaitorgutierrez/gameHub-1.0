import { questions } from "../../../data/quiz.data";
import { resetQuestion, selectAnswer } from "../../../utils/quizControler";
import "./showQuestion.css";

export const showQuestion = (questionIndex) => {
  console.log(questionIndex);
  const answerButton = document.getElementById("answer-buttons");
  const questionElement = document.getElementById("question");
  const nextButton = document.getElementById("next-button");
  const displayButton = document.querySelectorAll("#answer-buttons");
  displayButton.forEach((element) => {
    element.style.display = "block";
  });
  resetQuestion();
  let currentQuestion = questions[questionIndex];
  let questionNo = questionIndex + 1;
  nextButton.innerHTML = "Next";
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;
  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("buttonQuiz");
    answerButton.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", (e) => {
      selectAnswer(e);
    });
  });
};
