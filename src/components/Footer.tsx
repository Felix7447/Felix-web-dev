import React from 'react'
import Link from 'next/link'
import Footer from '@/types/footerTypes'
import EmailForm from './EmailForm'
import GmailIcon from '@/assets/icons/GmailIcon'
import LinkedinIcon from '@/assets/icons/LinkedinIcon'
import GithubIcon from '@/assets/icons/GithubIcon'
import { getMenu } from '@/utils/mainMenu'
import MenuLink from './MenuLink'

const Footer = ({ dictionary }: { dictionary: Footer }) => {
  const mainMenu = getMenu(dictionary.links)
  return (
    <footer className='bg-main dark:text-secondary text-text p-12 grid grid-cols-12'>
      <main className='col-span-12 mb-4 md:col-span-6 md:px-8 md:py-4'>
        <h1 className='text-3xl my-4 font-bold'>
          {dictionary.title}
        </h1>
        <p className='text-xl'>
          {dictionary.description}
        </p>
      </main>
      <aside className='col-span-12 my-4 md:col-span-6 md:px-8'>
        <h1 className='text-2xl my-4 font-bold'>
          {dictionary.explore}
        </h1>
        <nav className='font-bold my-4 flex flex-col md:text-xl md:font-normal'>
          {
            mainMenu.map(({link, text}) => (
              <MenuLink key={`Footer-Link-${text}`} link={link} text={text} color='primary' />
            ))
          }
        </nav>
      </aside>
      <aside className='col-span-12 my-4 md:col-span-6 md:px-8'>
        <h1 className='text-2xl my-4 font-bold'>
          {dictionary.data}
        </h1>
        <p className='text-lg md:text-xl'>
          {dictionary.dataDescription}
        </p>
        <div className="flex justify-start gap-10 my-4 md:my-8">
          <figure className='w-16 h-16 rounded-md flex justify-center items-center bg-primary'>
            <a href={`mailto:felixreyna48@gmail.com`}>
              <GmailIcon />
            </a>
          </figure>
          <figure className='w-16 h-16 rounded-md flex justify-center items-center bg-primary'>
            <Link href={`https://www.linkedin.com/in/felix-reyna/`} target='_blank'>
              <LinkedinIcon />
            </Link>
          </figure>
          <figure className='w-16 h-16 rounded-md flex justify-center items-center bg-primary'>
            <Link href={`https://github.com/Felix7447`} target='_blank'>
              <GithubIcon />
            </Link>
          </figure>
        </div>
      </aside>
      <aside className='col-span-12 my-4 md:col-span-6 md:px-8'>
        <h1 className='text-2xl my-4 font-bold'>
          {dictionary.email}
        </h1>
        <EmailForm form={dictionary.form} />
      </aside>
    </footer>
  )
}

export default Footer