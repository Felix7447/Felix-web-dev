import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  image: string
  title: string
  icons: (() => React.JSX.Element)[]
  link?: any
}

const ProjectCard: React.FC<Props> = ({ image, title, icons, link }) => {
  return (
    <figure className='relative col-span-4 md:h-[45vh] lg:h-[65vh] bg-black'>
      <Image src={image} alt={title} fill className='object-cover bg-black' />
      <aside className='relative h-full w-full bg-gradient-to-t from-black to-transparent'>
        <div className='w-full absolute bottom-0 pb-4 px-4 dark:text-text text-text'>
          <h1 className='font-bold text-3xl my-2'>{title}</h1>
          <div className='my-4'>
            <h3 className='text-2xl'>Tech stack</h3>
            <div className='flex gap-2 text-xl'>
              {
                icons.map((icon) => (
                    <span className='flex justify-center items-center'>
                      {icon()}
                    </span>
                  ))  
              }
            </div>
          </div>
          <div className='relative flex justify-around text-text mt-2'>
            <Link href={""} className='w-[45%] p-4 bg-primary text-center text-xl'>Details</Link>
            {
              link === 'disabled' ?
                <Link href={""} target='_blank' className='w-[45%] p-4 bg-gray-500 text-primary text-center text-xl'>Watch Live</Link>
                : <Link href={link} target='_blank' className='w-[45%] p-4 bg-main text-center text-xl'>Watch Live</Link>
            }
          </div>
          </div>
      </aside>
    </figure>
  )
}

export default ProjectCard