import React from 'react'
import { getDictionary } from '../../../../get-dictionary'
import { Locale } from '../../../../i18n-config'

import MobileHeader from '@/components/MobileHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectPageSlider from '@/components/ProjectPageSlider'
import ProjectPageInfo from '@/components/ProjectPageInfo'
import projects from '@/utils/projects'
import ProjectPageFooter from '@/components/ProjectPageFooter'

export const dynamicParams = false

interface Props {
  params: { 
    lang: Locale,
    projectId: string 
  }
}

export function generateStaticParams() {
  const segments = projects.map((project) => project.id)
 
  return segments.map((segment) => ({
    projectName: segment,
  }))
}

const Project: React.FC<Props> = async ({ params }) => {
  const { lang, projectId } = params
  
  const { header, portfolio, footer } = await getDictionary(lang)
  const projectInfo = projects.filter((project) => project.id === projectId).pop()

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={header} />
      <Header dictionary={header.menu} />
      <section className='px-8 grid grid-cols-12 my-8'>
        <h1 className='col-span-12 my-2 font-bold capitalize text-center text-main text-5xl md:hidden'>{projectInfo?.name}</h1>
        <main className='col-span-12 lg:col-span-7 md:px-8 my-4'>
          <ProjectPageSlider projectId={projectInfo?.id} images={projectInfo?.images || []} />
        </main>
        <aside className='col-span-12 flex items-center lg:col-span-5 md:px-8'>
          <ProjectPageInfo info={projectInfo} dictionary={portfolio} />
        </aside>
        <div className='col-span-12 my-4 md:my-12 p-4'>
          <ProjectPageFooter info={projectInfo} dictionary={portfolio} />
        </div>
      </section>
      <Footer dictionary={footer} />
    </main>
  )
}

export default Project