import "./quiz.css";
import { quizControler } from "../../utils/quizControler";
import { addListenersTheme } from "../../utils/lightTheme";

const template = () => {
  return `
<div class="mainQuizDiv">
  <div class="quizDiv">
    <h1>Quiz cultura general</h1>
    <div class="quiz">
        <h2 id="question">Question goes here</h2>
        <div id="answer-buttons">
            <button class="buttonQuiz">Answer 1</button>
            <button class="buttonQuiz">Answer 2</button>
            <button class="buttonQuiz">Answer 3</button>
            <button class="buttonQuiz">Answer 4</button>
        </div>
        <button id="next-button">Next</button>
    </div>
  </div>
</div>
    `;
};

// const backgroundTheme = () => {
//   const backgrondTheme = document.getElementById("quizDiv");
//   if (addListenersTheme() === true) {
//     backgrondTheme.style.backgroundColor = black;
//   }
// };

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  quizControler();
};
