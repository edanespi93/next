import { Container, Text, Image } from "@nextui-org/react";
import React from "react";

const NoFavorite = () => {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        alignContent: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <Text h1>Sin Favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='img'
        width={250}
        height={250}
        css={{ opacity: "0.1" }}
      />
    </Container>
  );
};

export default NoFavorite;
