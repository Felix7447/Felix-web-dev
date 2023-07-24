import React from 'react'

import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

import MobileHeader from '@/components/MobileHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: { lang: Locale }
}

const Portfolio: React.FC<Props> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={dictionary.header} />
      <Header dictionary={dictionary.header.menu} />
      <div>Portfolio</div>
      <Footer dictionary={dictionary.footer} />
    </main>
  )
}

export default Portfolio