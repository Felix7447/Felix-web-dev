"use client"
import React from 'react'
import Link  from "next/link"
import { usePathname } from 'next/navigation'

import LangDropDown from './LangDropDown'
import ThemeButton from './ThemeButton'

import { HeaderMenu } from '@/headerTypes'

import FigureImage from './FigureImage'
import image from "@/assets/images/felix-reyna.webp"

interface Props {
  dictionary: HeaderMenu
}

const header: React.FC<Props> = ({ dictionary }) => {
  const pathname = usePathname()
  
  return (
    <header className='hidden sticky top-0 dark:bg-secondary bg-main h-20 py-2 justify-between items-center md:flex'>
      <nav className='ml-12'>
        <ul className='flex items-center gap-4 text-text'>
          <li>
            <Link href={`${pathname}`}>
              <FigureImage size={8} image={image.src} scale={90} />
            </Link>
          </li>
          <li>
            <Link href={`${pathname}/#About`} className='dark:hover:text-main'>
              {dictionary.about}
            </Link>
          </li>
          <li>
            <Link href={`${pathname}`} className='dark:hover:text-main'>
              {dictionary.projects}
            </Link>
          </li>
          <li>
            <Link href={`${pathname}`} className='dark:hover:text-main'>
              {dictionary.skills}
            </Link>
          </li>
          <li>
            <Link href={`${pathname}`} className='dark:hover:text-main'>
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