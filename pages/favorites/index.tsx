import React, { useEffect } from "react";
import { Layout } from "../../components/layouts/Layout";
import NoFavorite from "../../components/ui/NoFavorite";
import { useState } from "react";
import toggle from "../../utils/localFavorites";

import { FavoriteList } from "../../components/pokemon";

const Favorites = () => {
  const [listFavorite, setListFavorite] = useState<number[]>([]);

  useEffect(() => {
    setListFavorite(toggle.countFavorites());
  }, []);

  return (
    <Layout title='Favorites'>
      {listFavorite.length === 0 ? <NoFavorite /> : <FavoriteList listFavorite={listFavorite} />}
    </Layout>
  );
};
export default Favorites;
