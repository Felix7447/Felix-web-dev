import Project from "@/types/ProjectTypes"

// Images
import petvetImage from "@/assets/images/petvet.webp"
import petvet1 from "@/assets/images/petvet/petvet-1.webp"
import petvet2 from "@/assets/images/petvet/petvet-2.webp"
import petvet3 from "@/assets/images/petvet/petvet-3.webp"
import petvet4 from "@/assets/images/petvet/petvet-4.webp"

import bambinaImage from "@/assets/images/bambina.webp"

import figramImage from "@/assets/images/figram.webp"
import figram2 from "@/assets/images/figram/figram-2.webp"
import figram3 from "@/assets/images/figram/figram-3.webp"
import figram4 from "@/assets/images/figram/figram-4.webp"

import figuitarsImage from "@/assets/images/figuitars.webp"
import figuitars1 from "@/assets/images/figuitars/figuitars-1.webp"
import figuitars2 from "@/assets/images/figuitars/figuitars-2.webp"
import figuitars3 from "@/assets/images/figuitars/figuitars-3.webp"
import figuitars4 from "@/assets/images/figuitars/figuitars-4.webp"
import figuitars5 from "@/assets/images/figuitars/figuitars-5.webp"

import starwarsImage from "@/assets/images/starwars.webp"
import mystarw1 from "@/assets/images/mystarwars/mystarw-1.webp"
import mystarw2 from "@/assets/images/mystarwars/mystarw-2.webp"
import mystarw3 from "@/assets/images/mystarwars/mystarw-3.webp"

import fitimerImage from "@/assets/images/fitimer.webp"
import fitimer1 from "@/assets/images/fitimer/fitimer-1.webp"

import paintitImage from "@/assets/images/paintit.webp"
import paintit1 from "@/assets/images/paintit/paintit-1.webp"

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
    id: "petvet",
    name: "petvet",
    mainImage: petvetImage,
    images: [petvet1, petvet2, petvetImage, petvet3, petvet4],
    techStack: [NextIcon, TailwindIcon, JavaScriptIcon],
    link: "https://petvet-two.vercel.app/",
    githubLink: "https://github.com/Felix7447/petvet"
  },
  {
    id: "bambina",
    name: "bambina agenda (collab)",
    mainImage: bambinaImage,
    images: [bambinaImage],
    techStack: [VueIcon, VuetifyIcon, JavaScriptIcon],
    link: "disabled",
  },
  {
    id: "figram",
    name: "figram",
    mainImage: figramImage,
    images: [figramImage, figram2, figram3, figram4],
    techStack: [ReactIcon, StyledComponentsIcon, GraphQlIcon, ViteIcon, JavaScriptIcon],
    link: "https://figram-five.vercel.app/",
    githubLink: "https://github.com/Felix7447/Figram"
  },
  {
    id: "figuitars",
    name: "figuitars",
    mainImage: figuitarsImage,
    images: [figuitars1, figuitars2, figuitars3, figuitarsImage, figuitars4, figuitars5],
    techStack: [ShopifyIcon, CssIcon, JavaScriptIcon],
    link: "https://fi-guitars.myshopify.com/",
    githubLink: "https://github.com/Felix7447/petvet"
  },
  {
    id: "mystarwars",
    name: "my star wars site",
    mainImage: starwarsImage,
    images: [mystarw1, mystarw2, starwarsImage, mystarw3],
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon],
    link: "http://my-star-wars-site.vercel.app/",
    githubLink: "https://github.com/Felix7447/My-star-wars-site"
  },
  {
    id: "fitimer",
    name: "fiTimer",
    mainImage: fitimerImage,
    images: [fitimer1, fitimerImage],
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon, HtmlIcon],
    link: "https://timer-felix7447.vercel.app/",
    githubLink: "https://github.com/Felix7447/Timer"
  },
  {
    id: "paintit",
    name: "paint It",
    mainImage: paintitImage,
    images: [paintit1, paintitImage],
    techStack: [JavaScriptIcon, SassIcon, WebpackIcon, HtmlIcon],
    link: "http://my-paint.vercel.app/",
    githubLink: "https://github.com/Felix7447/My-Paint"
  },
]

export default projects