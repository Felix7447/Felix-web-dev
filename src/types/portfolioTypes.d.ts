export interface PortfolioProject {
  title: string
  short_description: string
  github: string
  description: string
  author: string
  collab: string
}

export interface Portfolio {
  title: string
  techStack: string
  details: string
  watchLive: string
  button: string
  projects: {
    [key: string]: PortfolioProject
  }
}