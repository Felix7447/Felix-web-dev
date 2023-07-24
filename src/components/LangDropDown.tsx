"use client"
import React, { useEffect } from 'react'
import { Listbox, Transition  } from '@headlessui/react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../i18n-config'

import "/node_modules/flag-icons/css/flag-icons.min.css"

const LangDropDawn: React.FC = () => {
  const pathName = usePathname()
  
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='relative'>
      <Listbox value={pathName}>
        <Listbox.Button className="flex items-center gap-1 dark:text-main text-text uppercase">{pathName.startsWith('/en') ? 'EN' : 'ES'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Listbox.Button>
        <Transition
          className="absolute top-8 left-[-18px]"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="dark:bg-primary bg-main px-4 py-2 rounded dark:border-main border-text border-2 w-20">
            {i18n.locales.map((locale) => (
              <Listbox.Option
                className="cursor-pointer dark:hover:text-main hover:text-secondary text-text uppercase"
                key={locale}
                value={redirectedPathName(locale)}
              >
                <Link href={redirectedPathName(locale)}>{locale}</Link>
                {
                  (locale === 'en') ? 
                    <span className='fi fi-us fis ml-2'></span>
                    : <span className='fi fi-es fis ml-2'></span>
                }
                
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default LangDropDawn