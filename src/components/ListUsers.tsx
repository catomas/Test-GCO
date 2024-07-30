"use client";

import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { User } from "../interfaces/user.interface";



export const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [countryFilter, setCountryFilter] = useState<string>("");


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=30");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.first.toLowerCase().includes(nameFilter.toLowerCase()) ||
    user.name.last.toLowerCase().includes(nameFilter.toLowerCase())
  ).filter(user => 
    user.location.country.toLowerCase().includes(countryFilter.toLowerCase())
  );



  return (
    <div className="py-8">
      <h1 className="py-4 font-bold text-3xl">List of Users</h1>
      <div className="py-4">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by country"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-4">
        {filteredUsers.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            gender={user.gender}
            picture={user.picture.large}
            phone={user.phone}
            country={user.location.country}
          />
        ))}
      </ul>
    </div>
  );
};
