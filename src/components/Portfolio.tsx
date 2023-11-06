"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Portfolio } from '@/types/portfolioTypes'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projects from '@/utils/projects';
import ProjectCard from './ProjectCard';
import Project from '@/types/ProjectTypes';
import ProjectSlider from './ProjectSlider';

import AOS from 'aos'
import 'aos/dist/aos.css';

interface Props {
  dictionary: Portfolio
}

const Portfolio: React.FC<Props> = ({ dictionary }) => {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded'
    })
  }, [])

  return (
    <section id='projects' className='dark:bg-secondary bg-main py-10'>
      <h1 className='dark:text-main text-text text-3xl my-4 md:my-8 md:text-5xl text-center font-bold'>
        {dictionary.title}
      </h1>
      <Swiper spaceBetween={50} className='!px-12 md:!hidden' modules={[Autoplay]} autoplay={{delay: 3000}}>
        {
          projects.slice(0, 6).map((project: Project) => (
            <SwiperSlide key={`projectSection-${project.id}`}>
              <ProjectSlider dictionary={dictionary} image={project.mainImage} title={project.name} icons={project.techStack} details={project.id} link={project.link} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <main className='hidden md:grid grid-cols-12 gap-4 px-16 my-8'>
        {
          projects.slice(0, 6).map((project: Project) => (
            <ProjectCard key={`projectSection-${project.id}`} dictionary={dictionary} image={project.mainImage} title={project.name} icons={project.techStack} details={project.id} link={project.link} />
          ))
        }
      </main>
      <footer className='w-full flex justify-center my-8' data-aos="fade-up">
        <Link href={`${pathname}/portfolio`} className='p-4 dark:bg-main bg-text dark:text-text text-primary' >{dictionary.button}</Link>
      </footer>
    </section>
  )
}

export default Portfolio