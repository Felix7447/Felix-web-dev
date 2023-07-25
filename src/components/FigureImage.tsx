import React from 'react'
import Image from 'next/image'

interface Props {
  size?: number,
  image: string,
  scale?: number
}

const FigureImage: React.FC<Props> = ({ size = 32, image, scale = 110 }) => {
  return (
    <figure className={`relative flex justify-center items-center w-${size} h-${size} dark:bg-main bg-text rounded-full`}>
      <Image 
        className={`scale-${scale}`}
        src={image} 
        alt="Felix Reyna"
        width={100}
        height={100}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </figure>
  )
}

export default FigureImage