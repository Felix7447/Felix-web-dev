"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Url } from 'next/dist/shared/lib/router/router'

interface Props {
  text: string
}

const DownloadResumeButton: React.FC<Props> = ({ text }) => {
  const pathname = usePathname()
  const [link, setLink] = useState<Url>('')
  
  useEffect(() => {
    if (pathname.includes('es')) {
      setLink('ResumeES.pdf')
    } else {
      setLink('ResumeEN.pdf')
    }
  }, [])

  return (
    <div className='my-8'>
      <Link href={link} target='_blank' download className='p-4 bg-main text-text'>
        {text}
      </Link>
    </div>
  )
}

export default DownloadResumeButton