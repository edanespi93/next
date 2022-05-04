import React, { FC } from "react";
import { Grid, Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card css={{ padding: "10px" }} clickable hoverable onClick={handleClick}>
        <Image
          width={"100%"}
          height={140}
          alt='noimage'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </Card>
    </Grid>
  );
};
