"use client"
import React from 'react'
import Link  from "next/link"
import LangDropDown from './LangDropDown'
import ThemeButton from './ThemeButton'

import { HeaderMenu } from '@/headerTypes'

const header = ({ dictionary }: { dictionary: HeaderMenu }) => {
  return (
    <header className='hidden dark:bg-secondary bg-main h-20 py-2 justify-between items-center md:flex'>
      <nav className='ml-12'>
        <ul className='flex items-center gap-4 text-text'>
          <li>
            <Link href={"/about"}>
              <figure className='w-8 h-8 dark:bg-main bg-text rounded-full'>
                {/* <img src="" alt="figure" /> */}
              </figure>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              {dictionary.about}
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              {dictionary.projects}
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              {dictionary.skills}
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              {dictionary.contact}
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center gap-4 mr-12'>
        <LangDropDown/>
        <ThemeButton />
      </div>
    </header>
  )
}

export default header