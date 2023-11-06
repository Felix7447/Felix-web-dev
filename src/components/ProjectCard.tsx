"use client"
import React, { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Portfolio } from '@/types/portfolioTypes'
import { Url } from 'next/dist/shared/lib/router/router'

import AOS from 'aos'
import 'aos/dist/aos.css';

interface Props {
  dictionary: Portfolio
  image: StaticImageData
  title: string
  icons: React.FC[]
  details: string
  link: Url
}

const ProjectCard: React.FC<Props> = ({ dictionary, image, title, icons, details, link }) => { 
  
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded'
    })
  }, [])

  return (
    <figure data-aos="fade-up" data-aos-duration="500" className='relative col-span-12 h-[65vh] bg-black md:col-span-6 md:h-[80vh] lg:col-span-4'>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className='object-cover bg-black' 
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      <aside className='relative z-10 h-full w-full bg-gradient-to-t from-black to-transparent'>
        <div className='w-full absolute bottom-0 pb-4 px-4 dark:text-text text-text'>
          <h1 className='capitalize font-bold text-3xl my-2'>{title}</h1>
          <div className='my-4'>
            <h3 className='text-2xl'>{dictionary.techStack}</h3>
            <div className='flex gap-2 text-xl'>
              {
                icons.map((Icon) => (
                    <span key={`icon-${Icon}`} className='flex justify-center items-center'>
                      <Icon />
                    </span>
                  ))  
              }
            </div>
          </div>
          <div className='relative flex justify-around text-text mt-2'>
            <Link href={`/project/${details}`} className='w-[45%] p-4 bg-primary text-center text-xl'>{dictionary.details}</Link>
            {
              link === 'disabled' ?
                <button className='w-[45%] p-4 bg-gray-500 text-primary text-center text-xl cursor-auto'>{dictionary.watchLive}</button>
                : <Link href={link} target='_blank' className='w-[45%] p-4 bg-main text-center text-xl'>{dictionary.watchLive}</Link>
            }
          </div>
        </div>
      </aside>
    </figure>
  )
}

export default ProjectCard