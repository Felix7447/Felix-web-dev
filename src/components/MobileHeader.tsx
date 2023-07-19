"use client"
import React from 'react'

import BurgerMenu from './BurgerMenu'
import LangDropDown from './LangDropDown'
import ThemeButton from './ThemeButton'

import { Header } from '@/headerTypes'

const MobileHeader = ({ dictionary }: { dictionary: Header }) => {

  return (
    <header className='relative h-20 px-8 dark:bg-secondary bg-main flex justify-between items-center md:hidden'>
      <BurgerMenu menu={dictionary.menu} />
      <div className='flex items-center gap-4 z-0'>
        <LangDropDown />
        <ThemeButton />
      </div>
    </header>
  )
}

export default MobileHeader