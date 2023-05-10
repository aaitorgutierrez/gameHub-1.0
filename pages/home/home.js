import { initControler } from "../../utils/route";
import "./home.css";

const template = () => {
  return `
    <div id="containerDashboard">
    <ul>
      <li>
        <figure id="figurePokemon" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/djglk3cso/image/upload/v1683121888/Game%20Hub/5b91409c-ee55-41da-9404-a71dbdabcd5f_gc49d2.png"
            alt="navigate to page pokemon"
            id="imgPokemon"
          />
          <h2>Pokedex</h2>
        </figure>
      </li>

      <li>
        <figure id="figureQuiz" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/djglk3cso/image/upload/v1683206031/Dise%C3%B1o_sin_t%C3%ADtulo_sxdp90.png"
            alt="navigate to page Quiz"
            id="imgQuiz"
          />
          <h2>Quiz</h2>
        </figure>
      </li>

      <li>
        <figure id="figureHangman" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/djglk3cso/image/upload/v1683293510/21c29419-51ce-4764-a55b-0d3aa7cd0534_btj6jp.png"
            alt="navigate to The Hangman"
            id="imgHangMan"
            />
            <h2>The Hangman</h2>
        </figure>
      </li>
    </ul>
    `;
};

const addListeners = () => {
  const imgPokemon = document.getElementById("figurePokemon");
  imgPokemon.addEventListener("click", () => {
    initControler("Pokedex");
  });
  const imgQuiz = document.getElementById("figureQuiz");
  imgQuiz.addEventListener("click", () => {
    initControler("Quiz");
  });
  const imgHangman = document.getElementById("figureHangman");
  imgHangman.addEventListener("click", () => {
    initControler("Hangman");
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
