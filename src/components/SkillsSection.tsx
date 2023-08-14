"use client"
import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Skills } from '@/types/skillsTypes';

import HtmlIcon from '@/assets/icons/HtmlIcon';
import CssIcon from '@/assets/icons/CssIcon';
import SassIcon from '@/assets/icons/SassIcon';
import TailwindIcon from '@/assets/icons/TailwindIcon';
import JavaScriptIcon from '@/assets/icons/JavaScriptIcon';
import TypeScriptIcon from '@/assets/icons/TypeScriptIcon';
import ReactIcon from '@/assets/icons/ReactIcon';
import NextIcon from '@/assets/icons/NextIcon';
import WebpackIcon from '@/assets/icons/WebpackIcon';
import ShopifyIcon from '@/assets/icons/ShopifyIcon';
import ViteIcon from '@/assets/icons/ViteIcon';

import AOS from 'aos'
import 'aos/dist/aos.css';

const SkillsSection = ({ dictionary }: { dictionary: Skills }) => {

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded'
    })
  }, [])

  return (
    <section id='skills' className='py-10 dark:bg-primary bg-text dark:text-text text-primary' data-aos='fade-right'>
      <h1 className='text-3xl my-8 text-center font-bold text-main'>{dictionary.title}</h1>
      <Swiper modules={[Autoplay]} spaceBetween={80} slidesPerView={'auto'} autoplay={{delay: 1500}} loop={true} breakpoints={{ 768: { slidesPerView: 3, autoplay: { delay: 2000 } }}} className='!px-8 md:!px-16 !my-8 !text-center'>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <HtmlIcon />
          </figure>
          <h1>
            {dictionary.html}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <CssIcon />
          </figure>
          <h1>
            {dictionary.css}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <SassIcon />
          </figure>
          <h1>
            {dictionary.sass}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <TailwindIcon />
          </figure>
          <h1>
            {dictionary.tailwind}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <JavaScriptIcon />
          </figure>
          <h1>
            {dictionary.javaScript}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <TypeScriptIcon />
          </figure>
          <h1>
            {dictionary.typeScript}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <ReactIcon />
          </figure>
          <h1>
            {dictionary.react}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <NextIcon />
          </figure>
          <h1>
            {dictionary.nextjs}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <WebpackIcon />
          </figure>
          <h1>
            {dictionary.webpack}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <ViteIcon />
          </figure>
          <h1>
            {dictionary.vite}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='h-20 flex justify-center items-center scale-150'>
            <ShopifyIcon />
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