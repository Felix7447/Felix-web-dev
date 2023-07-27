"use client"
import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image, { StaticImageData } from 'next/image';

interface Props {
  projectId: string | undefined
  images: StaticImageData[]
}

const ProjectPageSlider: React.FC<Props> = ({ projectId, images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {
        images.map((image, index) => (
          <SwiperSlide key={`${projectId}-image-${index}`}>
            <figure className='w-[720px] h-[480px] flex justify-center items-center'>
              <Image 
                className='object-contain'  
                src={image || ""} 
                alt={projectId || "image"} 
                fill 
                sizes="(max-width: 768px) 100vw"
              />
            </figure>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ProjectPageSlider