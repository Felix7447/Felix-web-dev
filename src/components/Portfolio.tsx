"use client"
import React from 'react'
import { Portfolio } from '@/types/portfolioTypes'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = ({ dictionary }: { dictionary: Portfolio }) => {
  return (
    <section className='dark:bg-secondary bg-main py-10'>
      <h1 className='dark:text-main text-text text-3xl md:text-5xl text-center font-bold'>
        {dictionary.title}
      </h1>
      <Swiper spaceBetween={50} className='!px-16 md:!hidden'>
        <SwiperSlide>
          <figure className='h-80 my-6 dark:bg-main bg-text'>
            Slide 1
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
        <figure className='col-span-4 md:h-[45vh] lg:h-[65vh] dark:bg-main bg-text'></figure>
        <figure className='col-span-4 md:h-[45vh] lg:h-[65vh] dark:bg-main bg-text'></figure>
        <figure className='col-span-4 md:h-[45vh] lg:h-[65vh] dark:bg-main bg-text'></figure>
        <figure className='col-span-4 md:h-[45vh] lg:h-[65vh] dark:bg-main bg-text'></figure>
        <figure className='col-span-4 md:h-[45vh] lg:h-[65vh] dark:bg-main bg-text'></figure>
        <figure className='col-span-4 md:h-[45vh] lg:h-[65vh] dark:bg-main bg-text'></figure>
      </main>
      <footer className='w-full flex justify-center my-8'>
        <button className='p-4 dark:bg-main bg-text dark:text-text text-primary '>{dictionary.button}</button>
      </footer>
    </section>
  )
}

export default Portfolio