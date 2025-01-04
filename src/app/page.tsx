import React from 'react'
import bg from "../assets/bg.jpg"
import Image from 'next/image'
import "./home.css"

const page = () => {
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={3500} height={1969}  />
    </div>
    <div className='mt-20 py-10 px-10 ml-10'>
      <h1 className='text-8xl'>FAVETOPIA</h1>
    </div>
    <div className='mt-0.5 ml-20'>
      <h2 className='text-gray-300 text-3xl'>All your favorites, in one place!</h2>
    </div>
    </main>

  )
}

export default page