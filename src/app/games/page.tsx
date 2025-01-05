import React from 'react'
import Image from 'next/image'
import bg from "../../assets/games.jpg"

const games = () => {
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
    </main>
  )
}

export default games