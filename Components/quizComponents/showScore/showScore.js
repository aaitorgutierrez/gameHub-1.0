import { questions } from "../../../data/quiz.data";
import "./showScore.css";

export const showScore = (score) => {
  const div = document.querySelector(".quiz");
  const nextButton = document.getElementById("next-button");
  const noDisplayButton = document.querySelectorAll("#answer-buttons");
  const questionElement = document.getElementById("question");
  noDisplayButton.forEach((element) => {
    element.style.display = "none";
  });
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
};
