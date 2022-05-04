import pokeApi from "../api/pokeApi";
import {Pokemon} from "../interfaces/pokemonFull";

export const pokeInfo = async (nameOrId: string) => {
  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
