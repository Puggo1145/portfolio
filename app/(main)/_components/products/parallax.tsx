"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
// images
import cqnumini from "@/assets/images/cqnu-mini.png";
import xdtodo from "@/assets/images/xdtodo.png";
import meowPlanet from "@/assets/images/meow-planet.png";
import everyMusic from "@/assets/images/everymusic.png";
import ydcrm from "@/assets/images/ydcrm.png";


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
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
  {
    title: "Every Music",
    link: "https://everymusic.com",
    thumbnail: everyMusic.src,
  },
  {
    title: "YDCRM",
    link: "https://ydcrm.com",
    thumbnail: ydcrm.src,
  },
];
