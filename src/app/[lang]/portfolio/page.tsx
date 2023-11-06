import React from 'react'

import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

import MobileHeader from '@/components/MobileHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectGrid from '@/components/ProjectGrid'

interface Props {
  params: { lang: Locale }
}

const Portfolio: React.FC<Props> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang)
  const { header, portfolio, footer } = dictionary

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={header} />
      <Header dictionary={header.menu} />
      <section>
        <h1 className='my-12 font-bold text-center text-main text-5xl'>{portfolio.title}</h1>
        <ProjectGrid portfolio={portfolio}/>
      </section>
      <Footer dictionary={footer} />
    </main>
  )
}

export default Portfolio