"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import Typed from 'typed.js'

import { Introducing } from '@/types/introducingTypes'

import bgImage from "@/assets/images/coding-man_desktop.webp"

interface Props {
  dictionary: Introducing
}

const Introducing: React.FC<Props> = ({ dictionary }) => {
  const title = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        `^1000${dictionary.title}`
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,
      loop: false,
      showCursor: true
    }

    const typingInstance = new Typed(title.current, options)

    return () => {
      typingInstance.destroy()
    }
  }, [])

  return (
    <section className='relative min-h-[90vh] flex flex-col justify-center items-center'>
      <Image 
        className='z-[-1] !h-[102%] impo opacity-40 object-cover' 
        src={bgImage.src} alt='bg-coding-man' 
        fill 
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
      />
      <div className='max-w-sm px-4 text-center md:max-w-xl'>
        <h1 ref={title} className='text-3xl dark:text-main text-secondary font-bold md:text-6xl md:w-50'>{dictionary.title}</h1>
        <p className='my-4 px-4 md:px-20'>{dictionary.description}</p>
        <button className='p-4 bg-main text-text '>{dictionary.button}</button>
      </div>
    </section>
  )
}

export default Introducing