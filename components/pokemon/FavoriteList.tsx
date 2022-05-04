import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoriteCard } from "./";

interface Props {
  listFavorite: number[];
}

export const FavoriteList: FC<Props> = ({ listFavorite }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {listFavorite.map((id) => (
        <FavoriteCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
