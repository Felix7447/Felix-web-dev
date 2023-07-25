import React from 'react'
import Image from 'next/image'
import image from "@/assets/icons/styledComponentIcon.png"

const StyledComponentsIcon = () => {
  return (
    <figure className='relative w-9 h-9'>
      <Image src={image} alt='Styled Components' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </figure>
  )
}

export default StyledComponentsIcon