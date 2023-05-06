import "./Pokedex.css";
import { dataPokemon } from "../../utils/dataPokemon"

//! ----------------------------------------------------------------
//? ------------------ TEMPLATE GENERAL ---------------------------
//! ----------------------------------------------------------------

// TODO Creamos una variable local para que tengan acceso todas las funciones con los datos del service
let dataServicePokemon;
let typeGlobal;
const template = () =>
  ` <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
    </div>
    <div class="galleryPokemon"></div>
  </div>`;


//TODO en el data service llamamos al servicio y creamos las figure que luego se pintaran
const dataService = async () => {
    const getData = await dataPokemon()
    const {pokemon, type} = getData
  dataServicePokemon = pokemon;
  typeGlobal = type;
 createAndPrintFigure(dataServicePokemon);

};

const createAndPrintFigure = (data) => {
  document.querySelector(".galleryPokemon").innerHTML = "";
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
      <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h2>${pokemon.name}</h2>
      </figure>
    `;
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};

const addListeners = () => {

  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
//   typeGlobal.forEach((type) => {
//     const buttonType = document.querySelector(`.${type}`);
//     buttonType.addEventListener("click", (e) => {
//       console.log(type);
//       filterPokemon(type, "type");
//     });
//   });
};

const filterPokemon = (filtro, donde) => {

  switch (donde) {
    case "name":
      {
        console.log(dataServicePokemon);
        const filterData = dataServicePokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      }
      break;
    case "type": {
      console.log(dataServicePokemon);

      const filterData = dataServicePokemon.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
      );

      break;
    }
  }
};

const printButtons = (types) => {
  types.forEach((type) => {
    const idCustom = `button${type[0].toUpperCase() + type.slice(1)}`;
    const buttonType = `<button class="buttonFilter ${type}" id=>${idCustom}</button>`;
    const filterButton = document.getElementById("filterButton");
    filterButton.innerHTML += buttonType;
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
//   printButtons();
  addListeners();
};
