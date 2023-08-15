"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import BurgerMenu from './BurgerMenu'
import FigureImage from './FigureImage'
import LangDropDown from './LangDropDown'
import ThemeButton from './ThemeButton'

import image from "@/assets/images/felix-reyna.webp"

import { Header } from '@/types/headerTypes'

const MobileHeader = ({ dictionary }: { dictionary: Header }) => {
  const pathname = usePathname()

  return (
    <header className='sticky top-[-1px] z-20 h-20 px-8 dark:bg-secondary bg-main flex justify-between items-center md:hidden'>
      {
        (pathname.length <= 3) ?
          <BurgerMenu dictionary={dictionary.menu} />
          : (
            <nav className='flex items-center gap-2 text-text'>
              <Link href={`/`} className='flex justify-center items-center'>
                <FigureImage size={9} image={image.src}/>
              </Link>
              <Link href={`/`} className='hover:text-main duration-150'>
                Home
              </Link>
            </nav>
          )
      }
      <div className='flex items-center gap-4 z-0'>
        <LangDropDown />
        <ThemeButton />
      </div>
    </header>
  )
}

export default MobileHeader