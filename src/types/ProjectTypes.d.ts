import { StaticImageData } from "next/image"

export default interface Project {
  name: string
  mainImage: StaticImageData
  techStack: (() => React.JSX.Element)[]
  button: string
  link?: string 
}