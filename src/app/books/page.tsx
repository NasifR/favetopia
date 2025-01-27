"use client";
import React from 'react'
import Image from 'next/image'
import bg from "../../assets/books.png"
import Form from '@/components/Form';
import { useState } from "react";
import withAuth from '@/components/withAuth';

const books = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleOpenModal = () => setIsModalOpen(true);
      const handleCloseModal = () => setIsModalOpen(false);
    
      const handleFormSubmit = (formData: any) => {
        console.log("Form submitted:", formData);
        alert(`New item added:\nTitle: ${formData.title}\nRating: ${formData.rating}\nStatus: ${formData.status}\nCover: ${formData.cover}`);
      };
  
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
    <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Add New Item
      </button>

      {isModalOpen && (
        <Form onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      )}

    </main>
    
  )
}

export default withAuth(books);