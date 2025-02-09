"use client";
import React from 'react'
import Image from 'next/image'
import bg from "../../assets/games.jpg"
import Form from '@/components/Form';
import { useState, useEffect} from "react";
import withAuth from '@/components/withAuth';
import { getAuth } from "firebase/auth";

const games = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(); //firebase auth

  // fetching user items from API
  useEffect(() => {
    const fetchGames = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games?userId=${user.uid}`);
        if (!response.ok) throw new Error("Failed to fetch games");
        const data = await response.json();
        setGamesList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }

    };

    fetchGames();
  }, [auth.currentUser]); // fetch when user changes

  // form submission
  const handleFormSubmit = async (formData: any) => {
    const user = auth.currentUser;
    if (!user) {
      alert("User not authenticated");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: user.uid }),
      });

      if (!response.ok) throw new Error("Failed to add game");

      const newItem = await response.json();
      setGamesList((prev) => [...prev, newItem]); // Update UI
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to add game");
    }
  };

  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
    <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-5 px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-black hover:text-white transition-all"
        >
          Add New Item
        </button>
      </div>

      {/* display user's games */}
      <section className="mt-8 mx-auto max-w-4xl">
        <h2 className="text-xl font-semibold text-center">Your Games</h2>
        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : gamesList.length === 0 ? (
          <p className="text-center mt-4">No games added yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {gamesList.map((game: any) => (
              <li key={game._id} className="border p-4 rounded-md shadow-md bg-gray-100">
                <p className="font-bold">{game.title}</p>
                <p>⭐ {game.rating} | {game.status}</p>
                <img src={game.cover} alt={game.title} className="mt-2 w-full h-48 object-cover rounded-md" />
              </li>
            ))}
          </ul>
        )}
      </section>
      
      {isModalOpen && <Form onClose={() => setIsModalOpen(false)} onSubmit={handleFormSubmit} />}
    </main>
  );
};

export default withAuth(games);