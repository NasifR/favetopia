import React from 'react'
import Image from 'next/image'

const shows = () => {
  return (
    <main>
    <div>
      <Image src={bg} alt="Cover Image" className="bg-img" width={1920} height={1080}  />
    </div>
    </main>
  )
}

export default shows