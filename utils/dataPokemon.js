import { Loading } from "../Components/Loading/Loading";
import { createAndPrintFigure } from "../components/CardPokemon/CardPokemon";
import { getPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";

let dataGlobal;

export const dataPokemon = async () => {
  const data = [];
  for (let i = 1; i < 151; i++) {
    data.push(await getPokemon(i));
  }
  return dataMap(data);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types,
  }));
  const type = typePokemon(filterData);

  dataGlobal = {
    type: type,
    pokemonData: filterData,
  };
  return dataGlobal;
};

export const filterPokemon = (filtro, donde) => {
  switch (donde) {
    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      }
      break;
    case "type": {
      const filterData = dataGlobal.pokemonData.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
      );
      if (filterData.length === 0) {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.type[1]?.type.name
            .toLowerCase()
            .includes(filtro.toLowerCase())
        );

        createAndPrintFigure(filterData);
      } else {
        createAndPrintFigure(filterData);
      }

      break;
    }
  }
};
