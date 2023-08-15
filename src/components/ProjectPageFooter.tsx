import React from 'react'
import Link from 'next/link'

import Project from '@/types/ProjectTypes'
import { Portfolio } from '@/types/portfolioTypes'
import GithubSolidIcon from '@/assets/icons/GithubSolidIcon'

interface Props {
  info: Project | undefined
  dictionary: Portfolio
}

const ProjectPageFooter: React.FC<Props> = ({ info, dictionary }) => {
  const { id, author, githubLink } = info || {}
  const projectDictionary = dictionary.projects[id || "not_found"]

  return (
    <section className='flex flex-col gap-4 text-xl md:text-2xl md:max-w-[80%] md:px-8 lg:m-auto'>
      <h1 className='text-main font-bold'>{projectDictionary?.author} {author}</h1>
      {info?.collab && <h1 className='text-main font-bold'>{projectDictionary?.collab} {info?.collab}</h1>}
      {githubLink && (<span>
        <Link href={githubLink || ""} target='_blank' className='text-main underline md:no-underline md:hover:underline'>
          <GithubSolidIcon /> {projectDictionary?.github}
        </Link>
      </span>)}
      <p>
        {projectDictionary?.description}
      </p>
    </section>
  )
}

export default ProjectPageFooter