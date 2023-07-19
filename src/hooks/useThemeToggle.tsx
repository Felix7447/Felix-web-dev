import React, { useEffect, useState } from 'react'

const userTheme = localStorage.getItem("theme")

const themeCheck = () => {
  if (!userTheme) {
    localStorage.setItem("theme", "dark")
  } else if (userTheme === "light") {
    document.documentElement.classList.remove("dark")
  }
}

const themeSwitch = (): string | null => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    return localStorage.getItem("theme")
  }
  document.documentElement.classList.add("dark")
  localStorage.setItem("theme", "dark")
  return localStorage.getItem("theme")

}

const useThemeToggle = () => {
  useEffect(() => {
    themeCheck()
  }, [])
  
  const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme"))

  const changeTheme = () => {
    const toggle = themeSwitch()
    setTheme(toggle)
  }

  
  return {
    theme,
    changeTheme
  }
}

export default useThemeToggle