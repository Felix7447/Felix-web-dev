import './[lang]/globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { i18n } from '../i18n-config'

const spaceGrotesk = localFont({
  src: '../assets/fonts/space-grotesk-v15-latin-regular.woff2',
  display: 'swap',
  style: 'normal',
  weight: '400',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Felix Reyna | Web Developer',
  description: 'Frontend Web Developer',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className={`dark ${spaceGrotesk.className}`}>
      <body className='dark:bg-primary dark:text-text bg-text text-primary'>{children}</body>
    </html>
  )
}
