import React from 'react'
import Image from 'next/image'
import bg from "../../assets/bg.jpg"
import "../home.css"

const about = () => {
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={3500} height={1969}  />
    </div>
    <div>about us</div>
    </main>
  )
}

export default about