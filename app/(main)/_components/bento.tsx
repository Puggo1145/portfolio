import Image from "next/image";
// components
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import IconCloud from "@/components/magicui/icon-cloud";
import Marquee from "@/components/magicui/marquee";
// utils
import { cn } from "@/lib/utils";
// icons
import {
    GlobeIcon,
} from "@radix-ui/react-icons";
import {
    LayoutGridIcon,
    MonitorSmartphoneIcon,
    FigmaIcon
} from "lucide-react";
// images
import figma from "@/assets/images/figma.png";
import figmaDark from "@/assets/images/figma-dark.png";
import cqnumini from "@/assets/images/cqnu-mini.png";
import xdtodo from "@/assets/images/xdtodo.png";
import meowPlanet from "@/assets/images/meow-planet.png";
import everyMusic from "@/assets/images/everymusic.png";
import ydcrm from "@/assets/images/ydcrm.png";

const myProducts = [
    {
        name: "CQNU Intelligent",
        img: cqnumini,
    },
    {
        name: "EveryMusic - Virtual music classroom for under-resourced schools",
        img: everyMusic,
    },
    {
        name: "Meow Planet",
        img: meowPlanet,
    },
    {
        name: "yueda CRM",
        img: ydcrm,
    },
    {
        name: "Let's Todo",
        img: xdtodo,
    },
]

const skills = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "vuedotjs",
    "nodedotjs",
    "express",
    "nextdotjs",
    "nuxtdotjs",
    "python",
    "docker",
    "git",
]

const features = [
    {
        Icon: MonitorSmartphoneIcon,
        name: "My Products",
        description: "Three of these products are now in production, making people's lives easier in different ways.",
        href: "/",
        cta: "Learn more",
        background: (
            <Marquee
                pauseOnHover
                className="flex items-center
                absolute top-10 [--duration:18s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
            >
                {myProducts.map((product, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative cursor-pointer overflow-hidden rounded-xl p-4",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <figcaption className="text-lg font-medium dark:text-white ">
                                    {product.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2">
                            <Image
                                className="h-full rounded-2xl"
                                src={product.img}
                                alt={product.name}
                            />
                        </blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4",
    },
    {
        Icon: LayoutGridIcon,
        name: "My Skills",
        description: "I have experience with bunches of technologies from design to development and deployment.",
        href: "https://github.com/Puggo1145",
        cta: "go to my github",
        background: (
            <div className="absolute h-full w-full flex items-center justify-center overflow-hidden px-4 pb-24">
                <IconCloud iconSlugs={skills} />
            </div>
        ),
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: GlobeIcon,
        name: "Communicate freely",
        description: "Proficient in English and Chinese, I can work with people all around the world.",
        // href: "/",
        // cta: "Learn more",
        background: (
            <div className="overflow-hidden absolute h-full w-full text-center pt-[84px] lg:pt-6 lg:pr-6 lg:text-right">
                <p className="text-6xl font-bold lg:text-3xl text-slate-600">TOEFL 110</p>
                <div className="mt-2 space-x-3 lg:hidden text-slate-500">
                    <span>Reading: 29</span>
                    <span>Listening: 26</span>
                    <span>Speaking: 26</span>
                    <span>Writing: 29</span>
                </div>
            </div>
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: FigmaIcon,
        name: "My Designs",
        description: "Check my designs on Figma. See how they will be turned into real products soon",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="overflow-hidden absolute h-full w-full 
            lg:pb-[150px] pb-[100px]">
                <Image
                    src={figma}
                    className="object-cover size-full opacity-60 
                    transition-all hover:scale-110 duration-300
                    dark:hidden"
                    alt=""
                />
                <Image
                    src={figmaDark}
                    className="object-cover size-full opacity-60 
                    transition-all hover:scale-110 duration-300
                    hidden dark:block"
                    alt=""
                />
            </div>
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
];

const Bento: React.FC = () => {
    return (
        <BentoGrid className="w-full lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
};

export default Bento;