"use client"
import React from 'react'

import Image from 'next/image'
import contactImage from "@/assets/images/contact-image.webp"

import 'aos/dist/aos.css';

interface Props {
  description: string,
  email: string
}

const ContactClient: React.FC<Props> = ({ description, email }) => {
  return (
    <>
      <aside data-aos="fade-left" className='col-span-12 flex justify-center md:order-2 md:col-span-4 '>
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
        <p data-aos="fade-right" className='col-span-12 px-4 text-center md:col-span-8 md:flex md:flex-col md:justify-center md:text-start md:text-2xl'>
          {description}
          <a href={'mailto:felixreyna48@gmail.com'} className='inline text-main hover:underline hover:duration-200'>
            <strong>{email}</strong>
          </a>
        </p>
    </>
  )
}

export default ContactClient