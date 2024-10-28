"use client";

import { motion, useScroll, useSpring } from "framer-motion"

export const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="z-50 fixed top-0 left-0 right-0 origin-left bg-slate-700 w-full h-2"
      style={{ scaleX }}
    />
  )
}