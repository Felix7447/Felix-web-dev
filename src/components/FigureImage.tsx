import React from 'react'
import Image from 'next/image'

const FigureImage = ({ size = 32, image, scale = 110 }: {
  size?: number,
  image: string,
  scale?: number
}) => {
  return (
    <figure className={`relative flex justify-center items-center w-${size} h-${size} dark:bg-main bg-text rounded-full`}>
      <Image 
        className={`scale-${scale}`}
        src={image} 
        alt="Felix Reyna"
        width={100}
        height={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </figure>
  )
}

export default FigureImage