"use client";
import { useState } from "react";
import Image from "next/image";
import withAuth from "@/components/withAuth";
import Form from "@/components/Form";
import bg from "@/assets/shows.jpg"; 

const shows = () => {
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
        <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080} />
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
  );
};

export default withAuth(shows);
