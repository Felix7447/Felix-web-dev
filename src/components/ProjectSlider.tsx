import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Portfolio } from '@/types/portfolioTypes'

interface Props {
  dictionary: Portfolio
  image: StaticImageData
  title: string
  icons: (() => React.JSX.Element)[]
  link?: any
}

const ProjectSlider: React.FC<Props> = ({ dictionary, image, title, icons, link }) => {
  return (
    <figure className='relative h-96 my-6 dark:bg-main bg-text'>
      <Image 
        src={image} 
        alt={title} 
        fill 
        className='object-cover bg-black' 
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <aside className='relative h-full w-full bg-gradient-to-t from-black to-transparent'>
        <div className='w-full absolute bottom-0 pb-4 px-4 dark:text-text text-text'>
          <h1 className='font-bold text-xl'>{title}</h1>
          <div className='my-2'>
            <h3 className='text-lg'>{dictionary.techStack}</h3>
            <div className='flex gap-2 text-lg overflow-hidden'>
              {
                icons.map((icon) => (
                    <span key={`icon-${icon}`} className='flex justify-center items-center'>
                      {icon()}
                    </span>
                  ))  
              }
            </div>
          </div>
          <div className='relative flex justify-around text-text text-md'>
            <Link href={""} className='w-[45%] p-2 bg-primary text-center'>{dictionary.details}</Link>
            {
              link === 'disabled' ?
                <button className='w-[45%] p-2 bg-gray-500 text-primary text-center cursor-auto'>{dictionary.watchLive}</button>
                : <Link href={link} target='_blank' className='w-[45%] p-2 bg-main text-center'>{dictionary.watchLive}</Link>
            }
          </div>
          </div>
      </aside>
    </figure>
  )
}

export default ProjectSlider