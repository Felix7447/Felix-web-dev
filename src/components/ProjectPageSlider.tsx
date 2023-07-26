"use client"
import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectPageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <figure className='w-full h-[30vw] flex justify-center items-center'>
          Slide 1
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className='w-full h-[30vw] flex justify-center items-center'>
          Slide 2
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className='w-full h-[30vw] flex justify-center items-center'>
          Slide 3
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className='w-full h-[30vw] flex justify-center items-center'>
          Slide 4
        </figure>
      </SwiperSlide>
    </Swiper>
  )
}

export default ProjectPageSlider