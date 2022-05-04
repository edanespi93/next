import {useState} from "react";

import {GetStaticProps, NextPage, GetStaticPaths} from "next";

import {Layout} from "../../components/layouts";
import pokeApi from "../../api/pokeApi";
import {Pokemon} from "../../interfaces/pokemonFull";
import {Grid, Card, Image, Text, Button, Container} from "@nextui-org/react";
import {toggle, pokeInfo} from "../../utils";
import confetti from "canvas-confetti";
import {Result, propsResult} from "../../interfaces/pokeType";

interface Props {
  pokemon: Pokemon;
}

const NameInfo: NextPage<Props> = ({pokemon}) => {
  const [verifyFavorite, setVerifyFavorite] = useState(
    toggle.isFavorite(pokemon.id)
  );

  const handleClick = () => {
    toggle.toggleFavorites(pokemon.id);
    setVerifyFavorite(!verifyFavorite);
    if (!verifyFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop: "5px"}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding: "30px"}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || ""}
                width='100%'
                alt={pokemon.name}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{display: "flex", justifyContent: "space-between"}}
            >
              <Text transform='capitalize' h2>
                {pokemon.name}
              </Text>
              <Button
                color={"gradient"}
                ghost={!verifyFavorite}
                size='sm'
                onClick={handleClick}
              >
                {verifyFavorite ? "Delete Favorite" : "Add favorite"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text h2>Sprites:</Text>
              <Container css={{display: "flex", flexDirection: "row"}}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const {data} = await pokeApi.get<propsResult>("/pokemon?limit=151");

  const pokemons: string[] = data.results.map((poke) => poke.name);

  return {
    paths: pokemons.map((name) => ({
      params: {name},
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {name} = params as {name: string};

  return {
    props: {
      pokemon: await pokeInfo(name),
    },
  };
};

export default NameInfo;
