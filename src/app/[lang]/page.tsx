import Header from "@/components/Header"
import MobileHeader from "@/components/MobileHeader"

import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

import Introducing from "@/components/Introducing"
import About from "@/components/About"
import Portfolio from "@/components/Portfolio"

interface Props {
  params: { lang: Locale }
}

const Home: React.FC<Props> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <MobileHeader dictionary={dictionary.header} />
      <Header dictionary={dictionary.header.menu} />
      <Introducing dictionary={dictionary.introducing}/>
      <About dictionary={dictionary.about} />
      <Portfolio dictionary={dictionary.portfolio} />
    </main>
  )
}

export default Home
