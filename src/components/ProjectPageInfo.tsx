import React from 'react'
import Link from 'next/link'
import Project from '@/types/ProjectTypes'
import { Portfolio } from '@/types/portfolioTypes'

interface Props {
  info: Project | undefined
  dictionary: Portfolio
}

const ProjectPageInfo: React.FC<Props> = ({ info, dictionary }) => {
  const { id, name, techStack, link } = info || {}
  const projectDictionary = dictionary.projects[id || "not_found"]
  
  return (
    <div className='p-2 place-self-center'>
      <h1 className='hidden capitalize text-3xl md:text-5xl font-bold mb-4 md:block text-main'>{name}</h1>
      <main className='flex flex-col gap-8'>
        <p className='text-xl md:pr-8'>
          {projectDictionary?.short_description}
        </p>
        <div>
          <h3 className='text-3xl text-main font-bold'>{dictionary.techStack}</h3>
          <div className='flex gap-2'>
            {
              techStack?.map((icon) => (
                <span key={`icon-${icon}`} className='flex justify-center items-center'>
                  {icon()}
                </span>
              ))
            }
          </div>
        </div>
        <div className='relative mt-4'>
          {
            link === 'disabled' ?
              <button className='w-[45%] p-4 bg-gray-500 text-primary text-center text-xl cursor-auto'>{dictionary.watchLive}</button>
              : <Link href={link || ""} target='_blank' className='w-[45%] my-2 p-4 bg-main text-text text-center text-xl'>{dictionary.watchLive}</Link>
          }
        </div>
      </main>
    </div>
  )
}

export default ProjectPageInfo