import { Url } from "next/dist/shared/lib/router/router"
import { StaticImageData } from "next/image"

export default interface Project {
  name: string
  mainImage: StaticImageData
  images: StaticImageData[]
  techStack: (() => React.JSX.Element)[]
  link: Url 
  githubLink?: string
}