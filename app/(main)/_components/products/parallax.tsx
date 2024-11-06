"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
// images
import cqnumini from "@/assets/images/cqnu-mini.png";
import xdtodo from "@/assets/images/xdtodo.png";
import meowPlanet from "@/assets/images/meow-planet.png";
import everyMusic from "@/assets/images/everymusic.png";
import ydcrm from "@/assets/images/ydcrm.png";

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
    title: "CQNU intelligent",
    link: "https://gomoonbeam.com",
    thumbnail: cqnumini.src,
  },
  {
    title: "XDTODO",
    link: "https://xdtodo.com",
    thumbnail: xdtodo.src,
  },
  {
    title: "Meow Planet",
    link: "https://meowplanet.com",
    thumbnail: meowPlanet.src,
  },
];

export const productsFirstRow = [
  {
    title: "YDCRM",
    link: "https://ydcrm.com",
    thumbnail: ydcrm.src,
  },
  {
    title: "Every Music",
    link: "https://everymusic.com",
    thumbnail: everyMusic.src,
  },
  {
    title: "Meow Planet Web",
    link: "https://mmxq.cn",
    thumbnail: "",
  },
]