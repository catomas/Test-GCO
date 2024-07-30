"use client";

import { useFavoriteStore } from "@/store/useFavoriteStore";
import { UserCard } from "./UserCard";

export const ListFavorites = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <>
      <h1 className="text-3xl py-8 font-bold ">Favorites Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {favorites.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            gender={user.gender}
            picture={user.picture}
            phone={user.phone}
            country={user.country}
          />
        ))}
      </div>
    </>
  );
};
