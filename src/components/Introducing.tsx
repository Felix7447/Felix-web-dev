import React from 'react'
import Image from 'next/image'

import { Introducing } from '@/types/introducingTypes'

import bgImage from "@/assets/images/coding-man_desktop.webp"
import AnimatedTitle from './AnimatedTitle'
import DownloadResumeButton from './DownloadResumeButton'

interface Props {
  dictionary: Introducing
}

const Introducing: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className='relative min-h-[90vh] flex flex-col justify-center items-center'>
      <Image 
        className='z-[-1] !h-[102%] impo opacity-40 object-cover' 
        src={bgImage.src} alt='bg-coding-man' 
        fill 
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
      />
      <div className='max-w-sm px-4 text-center md:max-w-xl'>
        <AnimatedTitle text={dictionary.title} />
        <p className='my-4 px-4 md:px-20'>{dictionary.description}</p>
        <DownloadResumeButton text={dictionary.button} />
      </div>
    </section>
  )
}

export default Introducing