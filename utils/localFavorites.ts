const toggleFavorites = (id: number) => {
  console.log("Toggle llamado");

  let favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (!favorites.includes(id)) {
    favorites.push(id);
  } else {
    favorites = favorites.filter((index) => index !== id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites.includes(id);
};

const countFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

const toggle = {
  toggleFavorites,
  isFavorite,
  countFavorites,
};

export default toggle;
