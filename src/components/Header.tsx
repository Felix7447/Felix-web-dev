"use client"
import React, { useEffect } from 'react'
import Link  from "next/link"
import { usePathname } from 'next/navigation'

import LangDropDown from './LangDropDown'
import ThemeButton from './ThemeButton'

import { HeaderMenu } from '@/types/headerTypes'

import FigureImage from './FigureImage'
import image from "@/assets/images/felix-reyna.webp"

import MenuLink from './MenuLink'
import { getMenu } from '@/utils/mainMenu'

interface Props {
  dictionary: HeaderMenu
}

const Header: React.FC<Props> = ({ dictionary }) => {
  const pathname = usePathname()

  const mainMenu = getMenu(dictionary)

  return (
    <header className='hidden z-20 sticky top-0 dark:bg-secondary bg-main h-20 py-2 justify-between items-center md:flex'>
      <nav className='ml-12'>
        <ul className='flex items-center gap-4 text-text'>
          <li>
            <Link href={`/`}>
              <FigureImage size={8} image={image.src} scale={90} />
            </Link>
          </li>
          {
            (pathname.length <= 3) ?
            mainMenu.map((item) => (
              <li key={`item-${item.link}`}>
                <MenuLink link={item.link} text={item.text} />
              </li>
            )) :
            <li>
            <Link href={`/`} className='hover:text-main duration-150'>
              Home
            </Link>
          </li>
          }
        </ul>
      </nav>
      <div className='flex items-center gap-4 mr-12'>
        <LangDropDown/>
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header