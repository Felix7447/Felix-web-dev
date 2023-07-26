import React from 'react'
import { getDictionary } from '../../../../get-dictionary'
import { Locale } from '../../../../i18n-config'

import MobileHeader from '@/components/MobileHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectPageSlider from '@/components/ProjectPageSlider'
import ProjectPageInfo from '@/components/ProjectPageInfo'
import projects from '@/utils/projects'

export const dynamicParams = false

interface Props {
  params: { 
    lang: Locale,
    projectName: string 
  }
}

export function generateStaticParams() {
  const segments = projects.map((project) => project.name)
 
  return segments.map((post) => ({
    projectName: post,
  }))
}

const Project: React.FC<Props> = async ({ params }) => {
  const { lang, projectName } = params
  
  const { header, portfolio, footer } = await getDictionary(lang)
  const projectInfo = projects.filter((project) => project.name === projectName).pop()

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={header} />
      <Header dictionary={header.menu} />
      <section className='px-8 grid grid-cols-12 my-8'>
        <h1 className='col-span-12 my-2 font-bold text-center text-main text-5xl md:hidden'>{projectInfo?.name}</h1>
        <main className='col-span-12 lg:col-span-7 md:px-8 my-4'>
          <ProjectPageSlider />
        </main>
        <aside className='col-span-12 flex items-center lg:col-span-5 md:px-8'>
          <ProjectPageInfo info={projectInfo} dictionary={portfolio} />
        </aside>
        <div className='col-span-12 my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsum veritatis facilis ducimus similique omnis delectus molestiae reiciendis odit provident officia pariatur ipsam iure cumque, iusto unde culpa exercitationem? Nulla?
        </div>
      </section>
      <Footer dictionary={footer} />
    </main>
  )
}

export default Project