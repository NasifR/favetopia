import React from 'react'
import bg from "../assets/bg.jpg"
import Image from 'next/image'
import "./home.css"
import Link from 'next/link'

const page = () => {
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={3500} height={1969}  />
    </div>
    <div className='mt-20 py-1 px-10 ml-10'>
      <h1 className='text-8xl'>FAVETOPIA</h1>
    </div>
    <div className='ml-20'>
      <h2 className='text-gray-300 text-3xl'>All your favorites, in one place!</h2>
    </div>
    <div>
      <Link href="/about">
      <button className='ml-20 px-3 py-3 mt-2 text-white bg-purple-700 rounded-md hover:bg-black transition-all'>Learn More</button>
      </Link>
    </div>
    </main>

  )
}

export default page