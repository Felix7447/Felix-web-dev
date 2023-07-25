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
    name: "Petvet",
    mainImage: petvetImage,
    techStack: [NextIcon, TailwindIcon, JavaScriptIcon],
    button: "petvet",
    link: "https://petvet-two.vercel.app/"
  },
  {
    name: "Bambina Agenda (Collab)",
    mainImage: bambinaImage,
    techStack: [VueIcon, VuetifyIcon, JavaScriptIcon],
    button: "bambina",
    link: "disabled"
  },
  {
    name: "Figram",
    mainImage: figramImage,
    techStack: [ReactIcon, StyledComponentsIcon, GraphQlIcon, ViteIcon, JavaScriptIcon],
    button: "figram",
    link: "https://figram-five.vercel.app/"
  },
  {
    name: "Figuitars",
    mainImage: figuitarsImage,
    techStack: [ShopifyIcon, CssIcon, JavaScriptIcon],
    button: "figuitars",
    link: "https://fi-guitars.myshopify.com/"
  },
  {
    name: "My Star Wars Site",
    mainImage: starwarsImage,
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon],
    button: "figuitars",
    link: "http://my-star-wars-site.vercel.app/"
  },
  {
    name: "FiTimer",
    mainImage: fitimerImage,
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon, HtmlIcon],
    button: "fitimer",
    link: "https://timer-felix7447.vercel.app/"
  },
  {
    name: "Paint It",
    mainImage: paintitImage,
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon, HtmlIcon],
    button: "paintit",
    link: "http://my-paint.vercel.app/"
  },
]

export default projects