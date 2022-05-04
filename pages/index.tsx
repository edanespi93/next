import { Grid } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { propsResult, Result } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: Result[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listados de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, id) => (
          <PokemonCard key={id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<propsResult>("/pokemon?limit=151");

  const pokemons: Result[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
export default Home;
