import { Loading } from "../../Components/Loading/Loading";
import { printButtons } from "../../components/ButtonPokemon/ButtonPokemon";
import { createAndPrintFigure } from "../../components/CardPokemon/CardPokemon";
import { dataPokemon, filterPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";

let dataServicePokemon;
let typeGlobal;
const template = () =>
  ` <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
      <div class="spinner"></div>
    </div>
    <div class="galleryPokemon"></div>
  </div>`;

// const spinnerPokemon = () => {
//   const spinnerContainer = document.querySelector(".spinner");
//   spinnerContainer.innerHTML = Loading();
// };
// const clearSpinnerPokemon = () => {
//   const spinnerContainer = document.querySelector(".spinner");
//   spinnerContainer.innerHTML = "";
// };
const dataService = async () => {
  document.querySelector(".spinner").innerHTML = Loading();
  const getData = await dataPokemon();
  const { type, pokemonData } = getData;
  dataServicePokemon = pokemonData;
  typeGlobal = type;
  document.querySelector(".spinner").innerHTML = "";
  createAndPrintFigure(dataServicePokemon);
  printButtons(type);
};

//TODO --> Añadimos los escuchadores de eventos
const addListeners = () => {
  /// EVENTO TO INPUT
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    /// ----> Llamo a la funcion que se encarga de filtrar los elementos
    filterPokemon(e.target.value, "name");
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};
