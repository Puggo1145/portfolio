"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  link?: string;
  thumbnail: string;
}

export const HeroParallax = ({
  productsFirstRow,
  productsSecondRow
}: {
  productsFirstRow: Product[];
  productsSecondRow: Product[];
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.2, 1], [400, -1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.2, 1], [-1200, 800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 800]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[240vh] antialiased relative flex flex-col self-auto [perspective:500px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {productsFirstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              width={600}
              height={360}
              className="w-[600px] h-[360px]"
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {productsSecondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              width={290}
              height={640}
              className="w-[290px] h-[640px]"
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto text-center py-20 md:py-40 px-4 w-full">
      {/* <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Let's take a closer look
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        I build beautiful products with the latest technologies and frameworks
      </p> */}
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  className,
  width,
  height,
}: {
  product: Product;
  translate: MotionValue<number>;
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      key={product.title}
      className={`group/product relative flex-shrink-0 hover:brightness-75 bg-secondary ${className}`}
    >
      <Link
        href={product.link || ""}
        className="block group-hover/product:shadow-2xl"
      >
        {product.thumbnail
          ?
          <Image
            src={product.thumbnail}
            width={width}
            height={height}
            className="absolute inset-0 h-full object-cover object-center rounded-xl"
            alt={product.title}
          />
          :
          <p className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg font-bold">
            Comming Soon
          </p>
        }
      </Link>
      <h2 className="absolute top-4 left-4 opacity-0 group-hover/product:opacity-100 text-primary font-bold">
        {product.title}
      </h2>
    </motion.div>
  );
};
