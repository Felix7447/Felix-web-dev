"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Skills } from '@/types/skillsTypes';

const SkillsSection = ({ dictionary }: { dictionary: Skills }) => {
  return (
    <section className='h-[50vh] py-10 dark:bg-primary bg-text dark:text-text text-primary'>
      <h1 className='text-3xl my-8 text-center font-bold dark:text-main'>{dictionary.title}</h1>
      <Swiper spaceBetween={80} slidesPerView={'auto'} loop={true} className='!px-8 md:!px-16 !my-8 !text-center md:!hidden'>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            Slide 1
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            Slide 2
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            Slide 3
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            Slide 4
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            Slide 5
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            Slide 6
          </h1>
        </SwiperSlide>
      </Swiper>
      <Swiper spaceBetween={50} slidesPerView={3} loop={true} className='!hidden !px-16 !my-8 !text-center md:!block'>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.html}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.css}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.sass}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.tailwind}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.javaScript}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.typeScript}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.react}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.nextjs}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.webpack}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.vite}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 bg-main'>
          </figure>
          <h1>
            {dictionary.shopify}
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SkillsSection