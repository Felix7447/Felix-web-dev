"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const bodyScrollLock = require('body-scroll-lock');

import { Menu, Transition } from '@headlessui/react'
import { HeaderMenu } from '@/types/headerTypes'

import image from "@/assets/images/felix-reyna.webp"

import FigureImage from './FigureImage'
import MenuLink from './MenuLink';
import { getMenu } from '@/utils/mainMenu';

interface Props {
  dictionary: HeaderMenu
}

const BurgerMenu: React.FC<Props> = ({ dictionary }) => {
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const pathname = usePathname()
  const mainMenu = getMenu(dictionary)
  
  const [customOpen, setCustomOpen] = useState(false)

  const handleMenu = () => {
    setCustomOpen(!customOpen)
  }

  const handleScroll = (toggle: boolean) => {
    const [body, setBody] = useState<Window | null>(null)

    useEffect(() => {
      setBody(window)
    }, [])

    if (!body) {
      return
    }

    return toggle ? disableBodyScroll(body) : enableBodyScroll(body)
  }

  return (
    <Menu>
      {({ open }) => {
        customOpen ? handleScroll(true) : handleScroll(false)
        return (
          <>
            <Menu.Button className="dark:text-main text-text z-20 overflow-hidden" onClick={handleMenu}>
              {
                customOpen ? 
                (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                ) : 
                (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                )
              }
            </Menu.Button>
            <Transition
              show={customOpen}
              className="absolute top-0 left-0 z-10"
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items static className="w-80 h-screen dark:bg-secondary bg-main flex gap-4 flex-col items-center p-20 text-2xl text-text font-bold pt-28">
                <Menu.Item>
                  <Link href={`/`} className='flex justify-center items-center'>
                    <FigureImage image={image.src}/>
                  </Link>
                </Menu.Item>
                {
                  ((pathname.length <= 3) ) && mainMenu.map((item) => (
                    <Menu.Item key={`item-${item.link}`}>
                      <MenuLink link={item.link} text={item.text} handleMenu={handleMenu} />
                    </Menu.Item>
                  ))
                }
              </Menu.Items>
            </Transition>
          </>
        )
      }}
    </Menu>
  )
}

export default BurgerMenu