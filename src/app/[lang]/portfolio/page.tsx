import React from 'react'

import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

import MobileHeader from '@/components/MobileHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

import projects from '@/utils/projects'
import Project from '@/types/ProjectTypes'

interface Props {
  params: { lang: Locale }
}

const Portfolio: React.FC<Props> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={dictionary.header} />
      <Header dictionary={dictionary.header.menu} />
      <section>
        <h1 className='my-12 font-bold text-center text-main text-5xl'>{dictionary.portfolio.title}</h1>
        <main className='grid grid-cols-12 gap-4 px-10 md:px-16 my-8'>
          {
            projects.map((project: Project) => (
              <ProjectCard key={`projectSection-${project.id}`} dictionary={dictionary.portfolio} image={project.mainImage} title={project.name} icons={project.techStack} details={project.id} link={project.link} />
            ))
          }
        </main>
      </section>
      <Footer dictionary={dictionary.footer} />
    </main>
  )
}

export default Portfolio