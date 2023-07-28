import { HeaderMenu } from "@/types/headerTypes"

export const getMenu = (dictionary: HeaderMenu) => {
  const menu = [
    {
      link: "#about",
      text: dictionary.about
    }, 
    {
      link: "#projects",
      text: dictionary.projects
    },
    {
      link: "#skills",
      text: dictionary.skills
    },
    {
      link: "#contact",
      text: dictionary.contact
    }
  ]

  return menu
}