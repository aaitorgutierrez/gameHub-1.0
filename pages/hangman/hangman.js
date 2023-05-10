import "./hangman.css";

const template = () => {
  return `
    <div class="hangmanDiv">
        <h1>Hangman Game</h1>
        <img id="hangman" src="" alt="Hangman">
        <div id="word"></div>
        <label for="inputHangman">Guess a letter:</label>
        <input type="text" id="inputHangman" maxlength="1">
        <button id="resetButton">Reset Game</button>
    </div>
    `;
};

const words = ["manzana", "discoteca", "columpio", "bebe", "pelota"];
let chosenWord = "";
let displayWord = [];
let attempts = 0;
const maxAttempts = 7;

const hangmanImages = [
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote0_xiqwwm.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote1_eiklmu.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote2_a8878g.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote3_fjzhsc.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote4_tyhj1w.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote5_tkwnzq.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122727/hagmanMonigote6_e6fqsg.png",
];

const chooseWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};

const createDisplayWord = (word) => {
  return Array.from({ length: word.length }, () => "_");
};

const updateDisplayWord = (input) => {
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === input) {
      displayWord[i] = input;
    }
  }
};

const updateHangmanImage = () => {
  const hangmanImage = document.getElementById("hangman");
  if (hangmanImage) {
    hangmanImage.src = hangmanImages[attempts];
  } else {
    console.error("Hangman image element not found");
  }
};

const handleInput = () => {
  const input = document.getElementById("inputHangman");
  const inputValue = input.value.toLowerCase();

  if (chosenWord.includes(inputValue)) {
    updateDisplayWord(inputValue);
  } else {
    attempts++;
    updateHangmanImage();
  }

  document.getElementById("word").innerText = displayWord.join(" ");

  if (attempts >= maxAttempts) {
    alert("Game over! The word was: " + chosenWord);
    resetGame();
  }

  if (!displayWord.includes("_")) {
    alert("Congratulations! You guessed the word: " + chosenWord);
    resetGame();
  }

  input.value = "";
};

const resetGame = () => {
  let chosenWord = "";
  let displayWord = [];
  let attempts = 0;
  chosenWord = chooseWord();
  displayWord = createDisplayWord(chosenWord);
  attempts = 0;
  updateHangmanImage();
  document.getElementById("word").innerText = displayWord.join(" ");
};

const addListeners = () => {
  document
    .getElementById("inputHangman")
    .addEventListener("inputHangman", handleInput);
  document.getElementById("resetButton").addEventListener("click", resetGame);
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
  resetGame();
};
