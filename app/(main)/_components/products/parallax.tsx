"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
// images
import cqnumini from "@/assets/images/cqnu-mini.png";
import cqnuminiStudy from "@/assets/images/cqnu-mini-study.png";
import cqnuminiSchedule from "@/assets/images/cqnu-mini-schedule.png";
import cqnuminiService from "@/assets/images/cqnu-mini-service.png";
import xdtodo from "@/assets/images/xdtodo.png";
import meowPlanet from "@/assets/images/meow-planet.png";
import everyMusic from "@/assets/images/everymusic.png";
import ydcrm from "@/assets/images/ydcrm.png";
import meowPlanetWeb from "@/assets/images/meow-planet-web.png";

// TODO - mobile optimization
export function ProductsParallax() {
  return (
    <div className="w-full overflow-hidden">
      <HeroParallax productsFirstRow={productsFirstRow} productsSecondRow={productsSecondRow} />
    </div>
  )
}
export const productsSecondRow = [
  {
    title: "CQNU intelligent (today)",
    link: "",
    thumbnail: cqnumini.src,
  },
  {
    title: "CQNU intelligent (study)",
    link: "",
    thumbnail: cqnuminiStudy.src,
  },
  {
    title: "CQNU intelligent (service)",
    link: "",
    thumbnail: cqnuminiService.src,
  },
  {
    title: "CQNU intelligent (schedule)",
    link: "",
    thumbnail: cqnuminiSchedule.src,
  },
  {
    title: "XDTODO",
    link: "",
    thumbnail: xdtodo.src,
  },
  {
    title: "Meow Planet",
    link: "https://meow-planet-web.vercel.app",
    thumbnail: meowPlanet.src,
  },
];

export const productsFirstRow = [
  {
    title: "YDCRM",
    link: "https://www.yuedajiaoyu.top",
    thumbnail: ydcrm.src,
  },
  {
    title: "Every Music",
    link: "https://every-music-spa.vercel.app/",
    thumbnail: everyMusic.src,
  },
  {
    title: "Meow Planet Web",
    link: "https://meow-planet-web.vercel.app",
    thumbnail: meowPlanetWeb.src,
  },
]