"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Portfolio } from '@/types/portfolioTypes'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projects from '@/utils/projects';
import ProjectCard from './ProjectCard';
import Project from '@/types/ProjectTypes';

interface Props {
  dictionary: Portfolio
}

const Portfolio: React.FC<Props> = ({ dictionary }) => {
  const pathname = usePathname()
  return (
    <section id='projects' className='dark:bg-secondary bg-main py-10'>
      <h1 className='dark:text-main text-text text-3xl md:text-5xl text-center font-bold'>
        {dictionary.title}
      </h1>
      <Swiper spaceBetween={50} className='!px-16 md:!hidden'>
        <SwiperSlide>
          <figure className='relative h-80 my-6 dark:bg-main bg-text'>
            <Image src={"/hello.png"} alt="Slide" fill />
            <aside className='absolute bottom-0 w-full px-4 border-2 border-red-500'>
              <h1 className='font-bold'>Title</h1>
              <div>
                <h3>Tech stack</h3>
                <div className='flex'>
                  <span>icon</span>
                  <span>icon</span>
                  <span>icon</span>
                  <span>icon</span>
                </div>
              </div>
              <div className='flex justify-around'>
                <button>button</button>
                <button>button</button>
              </div>
            </aside>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-80 my-6 dark:bg-main bg-text'>
            Slide 2
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-80 my-6 dark:bg-main bg-text'>
            Slide 3
          </figure>
        </SwiperSlide>
      </Swiper>
      <main className='hidden md:grid grid-cols-12 gap-4 px-16 my-8'>
        {
          projects.slice(0, 6).map((project: Project) => (
            <ProjectCard image={project.mainImage} title={project.name} icons={project.techStack} link={project.link} />
          ))
        }
      </main>
      <footer className='w-full flex justify-center my-8'>
        <Link href={`${pathname}/portfolio`} className='p-4 dark:bg-main bg-text dark:text-text text-primary' >{dictionary.button}</Link>
      </footer>
    </section>
  )
}

export default Portfolio