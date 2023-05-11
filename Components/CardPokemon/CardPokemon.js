import "./CardPokemon.css";
//! ----------------------------------------------------------------
//? ------------------ COMPONENTE QUE PINTA LAS CARTAS--------------
//! ----------------------------------------------------------------
export const createAndPrintFigure = (data) => {
  //borramos primero la galleria por si hubiera algun elemento pintado de antes
  document.querySelector(".galleryPokemon").innerHTML = "";
  // mapeamos la data para crear un figure de cada elemento que mandaremos a inyectar a la galeria
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
      <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h2>${pokemon.name} ${id(pokemon.id)}</h2>
        <p>Altura: ${pokemon.height}m</p>
        <p>Peso: ${pokemon.weight}kg</p>
      </figure>
    `;
    // una vez creado el figure se lo inyectamos a la galeria con un += para que vaya sumando a lo que ya tiene
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};
const id = (id) => {
  if (id < 10) {
    id = `#00${id}`;
    return id;
  } else if (id >= 10 && id < 100) {
    id = `#0${id}`;
    return id;
  } else {
    id = `#${id}`;
    return id;
  }
};
