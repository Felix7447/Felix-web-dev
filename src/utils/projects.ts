import Project from "@/types/ProjectTypes"

// Images
import petvetImage from "@/assets/images/petvet.webp"
import bambinaImage from "@/assets/images/bambina.webp"
import figramImage from "@/assets/images/figram.webp"
import figuitarsImage from "@/assets/images/figuitars.webp"
import starwarsImage from "@/assets/images/starwars.webp"
import fitimerImage from "@/assets/images/fitimer.webp"
import paintitImage from "@/assets/images/paintit.webp"

// Icons
import NextIcon from "@/assets/icons/NextIcon"
import TailwindIcon from "@/assets/icons/TailwindIcon"
import JavaScriptIcon from "@/assets/icons/JavaScriptIcon"
import ReactIcon from "@/assets/icons/ReactIcon"
import SassIcon from "@/assets/icons/SassIcon"
import ViteIcon from "@/assets/icons/ViteIcon"
import ShopifyIcon from "@/assets/icons/ShopifyIcon"
import CssIcon from "@/assets/icons/CssIcon"
import WebpackIcon from "@/assets/icons/WebpackIcon"
import HtmlIcon from "@/assets/icons/HtmlIcon"
import VueIcon from "@/assets/icons/VueIcon"
import VuetifyIcon from "@/assets/icons/VuetifyIcon"
import StyledComponentsIcon from "@/assets/icons/StyledComponentsIcon"
import GraphQlIcon from "@/assets/icons/GraphQlIcon"

const projects: Project[] = [
  {
    name: "petvet",
    mainImage: petvetImage,
    images: [petvetImage],
    techStack: [NextIcon, TailwindIcon, JavaScriptIcon],
    link: "https://petvet-two.vercel.app/",
    githubLink: "https://github.com/Felix7447/petvet"
  },
  {
    name: "bambina agenda (collab)",
    mainImage: bambinaImage,
    images: [bambinaImage],
    techStack: [VueIcon, VuetifyIcon, JavaScriptIcon],
    link: "disabled",
  },
  {
    name: "figram",
    mainImage: figramImage,
    images: [figramImage],
    techStack: [ReactIcon, StyledComponentsIcon, GraphQlIcon, ViteIcon, JavaScriptIcon],
    link: "https://figram-five.vercel.app/",
    githubLink: "https://github.com/Felix7447/Figram"
  },
  {
    name: "figuitars",
    mainImage: figuitarsImage,
    images: [figuitarsImage],
    techStack: [ShopifyIcon, CssIcon, JavaScriptIcon],
    link: "https://fi-guitars.myshopify.com/",
    githubLink: "https://github.com/Felix7447/petvet"
  },
  {
    name: "my star wars site",
    mainImage: starwarsImage,
    images: [starwarsImage],
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon],
    link: "http://my-star-wars-site.vercel.app/",
    githubLink: "https://github.com/Felix7447/My-star-wars-site"
  },
  {
    name: "fiTimer",
    mainImage: fitimerImage,
    images: [fitimerImage],
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon, HtmlIcon],
    link: "https://timer-felix7447.vercel.app/",
    githubLink: "https://github.com/Felix7447/Timer"
  },
  {
    name: "paint It",
    mainImage: paintitImage,
    images: [paintitImage],
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon, HtmlIcon],
    link: "http://my-paint.vercel.app/",
    githubLink: "https://github.com/Felix7447/My-Paint"
  },
]

export default projects