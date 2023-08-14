import React from 'react'
import Image from 'next/image'
import contactImage from "@/assets/images/contact-image.webp"
import { Contact } from '@/types/contactTypes'

const Contact = ({ dictionary }: { dictionary: Contact }) => {
  return (
    <section id='contact' className='py-10 dark:bg-secondary bg-text dark:text-text text-primary'>
      <h1 className='text-3xl my-8 text-main text-center font-bold'>
        {dictionary.title}
      </h1>
      <main className='max-w-5xl mx-auto grid grid-cols-12 px-8 my-10'>
        <aside className='col-span-12 flex justify-center md:order-2 md:col-span-4 '>
          <figure className='relative w-60 h-60 mb-8 rounded-full dark:bg-main bg-text'>
            <Image 
              src={contactImage} 
              fill 
              alt="contact felix reyna developer" 
              className='rounded-full scale-95' 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
        </aside>
        <p className='col-span-12 px-4 text-center md:col-span-8 md:flex md:flex-col md:justify-center md:text-start md:text-2xl'>
          {dictionary.description}
          <a href={'mailto:felixreyna48@gmail.com'} className='inline text-main hover:underline hover:duration-200'>{dictionary.email}</a>
        </p>
      </main>
    </section>
  )
}

export default Contact