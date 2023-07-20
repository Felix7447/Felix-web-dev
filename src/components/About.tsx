import React from 'react'
import Image from 'next/image'

import image from "@/assets/images/felix-reyna.webp"

import { About } from '@/aboutTypes'

const About = ({ dictionary }: { dictionary: About }) => {
  return (
    <section className='h-screen dark:bg-secondary bg-main py-20 text-center'>
      <h1 className='text-3xl text-text my-2 font-bold'>{dictionary.title}</h1>
      <div className='col-span-12 w-full flex justify-center items-center my-8 px-4'>
        <figure className={`relative flex justify-center items-center w-64 h-64 dark:bg-main bg-text rounded-full`}>
          <Image 
            className='scale-90'
            src={image} 
            alt="Felix Reyna"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
      </div>
      <aside className='grid grid-cols-12 justify-center text-text'>
        <p className='col-span-12 px-4'>{dictionary.description}</p>
        <div className="col-span-12 flex justify-around my-4">
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
      </aside>
    </section>
  )
}

export default About