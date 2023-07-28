"use client"
import React from 'react'
import Link from 'next/link'

interface Props {
  link: string
  text: string
  color?: string
  handleMenu?: () => void
}

const MenuLink: React.FC<Props> = ({ link, text, color = 'main', handleMenu }) => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (handleMenu) {
      handleMenu()
    }

    elem?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <Link href={link} className={`dark:hover:text-${color} duration-200`} onClick={handleScroll}>
      {text}
    </Link>
  )
}

export default MenuLink