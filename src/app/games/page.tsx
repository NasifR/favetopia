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
  }, [auth.currentUser]);

  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
    <div className="flex justify-center">
        <button
          onClick={handleOpenModal}
          className="mt-5 px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-black hover:text-white transition-all"
        >
          Add New Item
        </button>
      </div>

      {isModalOpen && (
        <Form onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      )}
    </main>
  )
}

export default withAuth(games);