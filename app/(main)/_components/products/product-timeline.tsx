import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
// images
import cqnumini from "@/assets/images/cqnu-mini.png";
import cqnuminiStudy from "@/assets/images/cqnu-mini-study.png";
import cqnuminiSchedule from "@/assets/images/cqnu-mini-schedule.png";
import cqnuminiService from "@/assets/images/cqnu-mini-service.png";
import cqnuminiFood from "@/assets/images/cqnu-mini-food.png";
import xdtodo from "@/assets/images/xdtodo.png";
import meowPlanet from "@/assets/images/meow-planet.png";
import everyMusic from "@/assets/images/everymusic.png";
import ydcrm from "@/assets/images/ydcrm.png";
import meowPlanetWeb from "@/assets/images/meow-planet-web.png";

export function ProductTimeline() {
    const data = [
        {
            title: "2022",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 text-2xl font-bold mb-2">
                        EveryMusic
                    </h1>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        This year is the turning point of my career. <br />
                        I built EveryMusic (Everyone is a musician).
                        A public welfare interactive music classroom learning software, aimed at under-resourced primary school students for their music education,
                        effectively replicating the music teaching process of traditional classrooms and optimizing the teaching design for the targeted educational scenarios of the product.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={everyMusic.src}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 text-2xl font-bold mb-2">
                        Meow Planet (MVP + Web)
                    </h1>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={meowPlanet.src}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={meowPlanetWeb.src}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        // {
        //   title: "Changelog",
        //   content: (
        //     <div>
        //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
        //         Deployed 5 new components on Aceternity today
        //       </p>
        //       <div className="mb-8">
        //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        //           ✅ Card grid component
        //         </div>
        //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        //           ✅ Startup template Aceternity
        //         </div>
        //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        //           ✅ Random file upload lol
        //         </div>
        //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        //           ✅ Himesh Reshammiya Music CD
        //         </div>
        //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        //           ✅ Salman Bhai Fan Club registrations open
        //         </div>
        //       </div>
        //       <div className="grid grid-cols-2 gap-4">
        //         <Image
        //           src="https://assets.aceternity.com/pro/hero-sections.png"
        //           alt="hero template"
        //           width={500}
        //           height={500}
        //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //         />
        //         <Image
        //           src="https://assets.aceternity.com/features-section.png"
        //           alt="feature template"
        //           width={500}
        //           height={500}
        //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //         />
        //         <Image
        //           src="https://assets.aceternity.com/pro/bento-grids.png"
        //           alt="bento template"
        //           width={500}
        //           height={500}
        //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //         />
        //         <Image
        //           src="https://assets.aceternity.com/cards.png"
        //           alt="cards template"
        //           width={500}
        //           height={500}
        //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //         />
        //       </div>
        //     </div>
        //   ),
        // },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
