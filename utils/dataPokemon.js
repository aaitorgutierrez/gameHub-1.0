import { getPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";

export const dataPokemon = async () => {
    const data = []
    for (let i = 1; i < 151; i++) {
        data.push(await getPokemon(i))
    }
    return dataMap(data)
}

const dataMap = (data) => {
    const filterdata = data.map((pokemon)=> ({
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types,
    }));

    const type = typePokemon(filterdata);

    return {
        type: type,
        pokemon: filterdata,
    }

    
};



