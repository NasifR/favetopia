import React from 'react'
import bg from "../assets/bg.jpg"
import Image from 'next/image'
import "./home.css"

const page = () => {
  return (
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={3500} height={1969}  />
    </div>

  )
}

export default page