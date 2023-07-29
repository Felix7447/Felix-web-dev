import React, { useEffect, useState } from 'react'


const themeCheck = () => {
  const userTheme = window.localStorage.getItem("theme")
  if (!userTheme) {
    window.localStorage.setItem("theme", "dark")
  } else if (userTheme === "light") {
    document.documentElement.classList.remove("dark")
  }
}

const themeSwitch = (): string | null => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    window.localStorage.setItem("theme", "light")
    return window.localStorage.getItem("theme")
  }
  document.documentElement.classList.add("dark")
  window.localStorage.setItem("theme", "dark")
  return window.localStorage.getItem("theme")
}

const useThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    themeCheck()
    setTheme(window.localStorage.getItem("theme"))
  }, [])
  

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