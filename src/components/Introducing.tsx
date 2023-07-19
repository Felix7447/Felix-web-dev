"use client"
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import { Introducing } from '@/introducingTypes'

const Introducing = ({ dictionary }: { dictionary: Introducing }) => {
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
    <section className='min-h-[80vh] flex flex-col justify-center items-center'>
      <div className='max-w-sm px-4 text-center md:max-w-xl'>
        <h1 ref={title} className='text-3xl dark:text-main text-secondary font-bold md:text-6xl md:w-50'>{dictionary.title}</h1>
        <p className='my-4 px-4 md:px-20'>{dictionary.description}</p>
        <button className='p-4 bg-main text-text '>{dictionary.button}</button>
      </div>
      
    </section>
  )
}

export default Introducing