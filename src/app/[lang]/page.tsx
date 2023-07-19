import Header from "@/components/Header"
import MobileHeader from "@/components/MobileHeader"

import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

export default async function Home({
    params: { lang },
  }: {
    params: { lang: Locale }
  }) 
  {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={dictionary.header} />
      <Header dictionary={dictionary.header.menu} />
      Hello world
    </main>
  )
}
