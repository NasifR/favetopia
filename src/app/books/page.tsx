import React from 'react'
import Image from 'next/image'
import bg from "../../assets/books.png"

const books = () => {
  return (
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
  )
}

export default books