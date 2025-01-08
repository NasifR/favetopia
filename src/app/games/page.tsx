"use client";
import React from 'react'
import Image from 'next/image'
import bg from "../../assets/games.jpg"
import Form from '@/components/Form'

const games = () => {
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
    <div>
      <Form/>
    </div>
    </main>
  )
}

export default games