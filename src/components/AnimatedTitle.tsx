"use client"
import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

interface Props {
  text: string
}

const AnimatedTitle: React.FC<Props> = ({ text }) => {
  const title = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        `^1000${text}`
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
    <h1 ref={title} className='text-3xl dark:text-main text-primary font-bold md:text-6xl md:w-50'>
      {text}
    </h1>
  )
}

export default AnimatedTitle