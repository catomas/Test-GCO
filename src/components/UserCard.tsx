import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";

interface UserProps {
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

export const UserCard = ({
  gender,
  picture,
  name,
  email,
  phone,
  country,
}: UserProps) => {
  const addFavorite = useFavoriteStore((state) => state.addFavorite);

  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const isFavorite = favorites.some((fav) => fav.email === email);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite({ gender, picture, name, email, phone, country });
    } else {
      addFavorite({ gender, picture, name, email, phone, country });
    }
  };

  return (
    <Card className="w-96  shadow-lg rounded-lg overflow-hidden">
      <CardHeader
        className={`p-4 ${
          isFavorite ? " bg-yellow-500" : "bg-blue-500"
        } text-white`}
      >
        <CardTitle className="text-xl font-bold">
          {name.title} {name.first} {name.last}
        </CardTitle>
        <CardDescription className="flex justify-center mt-2">
          <Image
            src={picture}
            alt="user"
            width={100}
            height={100}
            className="rounded-full"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-700">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-700">
          <strong>Gender:</strong> {gender}
        </p>
        <p className="text-gray-700">
          <strong>Country:</strong> {country}
        </p>
      </CardContent>
      <CardFooter className="bg-gray-100 p-4 flex justify-between">
        <p className="text-gray-700">
          <strong>Phone:</strong> {phone}
        </p>
        <Button variant="ghost" size="icon" onClick={handleToggleFavorite}>
          <StarIcon
            className={isFavorite ? "text-yellow-500" : "text-gray-500"}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};
