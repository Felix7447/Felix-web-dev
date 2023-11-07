"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface Props {
  link: string
  text: string
  color?: string
  handleMenu?: () => void
}

const MenuLink: React.FC<Props> = ({ link, text, color = 'main', handleMenu }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    const topView = element ? element?.getBoundingClientRect()?.top + window.scrollY - 80 : 0

    if (handleMenu) {
      handleMenu()
    }

    window.scrollTo({
      top: topView,
      behavior: "smooth"
    })
  }

  
  const handleLinkScroll = () => {
    const sections = document.querySelectorAll('section');
    const pageYOffset = window.scrollY;
    let newActiveSection: string | null = null;

    sections.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop - 80 && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    })

    setActiveSection(newActiveSection)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleLinkScroll);

    return () => {
      window.removeEventListener('scroll', handleLinkScroll);
    };
  }, [])  

  return (
    <Link href={link} className={link.includes(activeSection ?? ' ') ? `dark:text-${color} text-primary font-bold` : `dark:hover:text-${color} hover:text-primary hover:font-bold duration-200`} onClick={handleScroll}>
      {text}
    </Link>
  )
}

export default MenuLink