import { create } from "zustand";

interface User {
  gender: string;
  picture: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  country: string;
}

interface FavoriteStore {
  favorites: User[];
  addFavorite: (user: User) => void;
  removeFavorite: (user: User) => void;
}

const loadFavorites = (): User[] => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: loadFavorites(),
  addFavorite: (user) =>
    set((state) => {
      const updatedFavorites = [...state.favorites, user];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    }),
  removeFavorite: (user) =>
    set((state) => {
      const updatedFavorites = state.favorites.filter(
        (favorite) => favorite.email !== user.email
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    }),
}));
