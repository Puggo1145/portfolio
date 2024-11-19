// images
// every music
import everyMusic from "@/assets/images/everymusic.png";
import everyMusicWeb from "@/assets/images/everyMusicWeb.png";
import everyMusicVins from "@/assets/images/everyMusicVins.png";
import everyMusicInteracCour from "@/assets/images/everyMusicInteracCour.png";
import everyMusicDemo1 from "@/assets/images/everyMusicDemo1.png";
import everyMusicDemo2 from "@/assets/images/everyMusicDemo2.png";
import everyMusicDemo3 from "@/assets/images/everyMusicDemo3.png";
import everyMusicDemo4 from "@/assets/images/everyMusicDemo4.png";
// cqnu mini
import cqnumini from "@/assets/images/cqnu-mini.png";
import cqnuminiStudy from "@/assets/images/cqnu-mini-study.png";
import cqnuminiSchedule from "@/assets/images/cqnu-mini-schedule.png";
import cqnuminiService from "@/assets/images/cqnu-mini-service.png";
// ydcrm
import ydcrm from "@/assets/images/ydcrm.png";
import ydcrmAuth from "@/assets/images/ydcrm-auth.png";
import ydcrmTasks from "@/assets/images/ydcrm-tasks.png";
import ydcrmData from "@/assets/images/ydcrm-data.png";
// meow planet
import meowPlanetWeb from "@/assets/images/meow-planet-web.png";
import meowPlanetWeb2 from "@/assets/images/meow-planet-web2.png";

interface ProductTimeline {
    time: string;
    heading: string;
    desc: React.ReactNode;
    image: string[];
    buttonText?: string;
    link?: string;
}

export const productTimeline: ProductTimeline[] = [
    {
        time: "2022",
        heading: "EveryMusic - The turning point",
        desc: (
            <>
                I built <strong>EveryMusic (Everyone is a musician)</strong> this year, a public welfare interactive music classroom learning software, aimed at under-resourced primary school students for their music education,
                effectively replicating the music teaching process of traditional classrooms and optimizing the teaching design for the targeted educational scenarios with high interactivity. <br />
                <br />
                Together with my team, we brought EveryMusic to life in several primary schools across Chongqing. The joy that radiated from those young kids touched our hearts deeply.
                Watching their faces light up with wonder and delight during our music lessons, hearing their laughter echo through the classroom - those precious moments reminded me why we create. <br />
                <br />
                This experience ignited my unwavering passion for using technology to bring value to people's lives. It crystallized my commitment to pursuing excellence as a full-stack engineer - a path I know with absolute certainty is my calling.
            </>
        ),
        buttonText: "Check the demo version",
        link: "https://every-music-spa.vercel.app",
        image: [
            everyMusic.src,
            everyMusicWeb.src,
            everyMusicVins.src,
            everyMusicInteracCour.src,
            everyMusicDemo1.src,
            everyMusicDemo2.src,
            everyMusicDemo3.src,
            everyMusicDemo4.src
        ]
    },
    {
        time: "2023",
        heading: "CQNU Intellisense - Deep dive",
        desc: (
            <>
                A campus mini-program, designed to facilitate social and lifestyle services at Chongqing Normal University. (v2.0)<br />
                We have currently gained <strong>3700+ users</strong>, with a <strong>70%+ daily user retention rate</strong>. Students love what we built. <br />
                <br />
                The app is available on WeChat - search for "智慧重师" to try it out (a university account is required).
            </>
        ),
        image: [
            cqnumini.src,
            cqnuminiStudy.src,
            cqnuminiSchedule.src,
            cqnuminiService.src,
        ]
    },
    {
        time: "2023-2024",
        heading: "Meow Planet",
        desc: (
            <>
                Discover, care for, and share the joy of stray cats on campus. Meow Planet is a social media app dedicated to bringing people and cats together, creating meaningful connections and spreading love. Let's make good things happen. <br />
                Currently in beta, Meow Planet continues to evolve with ongoing improvements.
            </>
        ),
        image: [
            meowPlanetWeb.src,
            meowPlanetWeb2.src,
        ],
        buttonText: "Have a look",
        link: "https://meow-planet-web.vercel.app/",
    },
    {
        time: "2024",
        heading: "YueDa CRM - Explore the state of the art",
        desc: (
            <>
                A fullstack CRM system created for my dad's company with cutting age tech stacks such as Next.js, server actions and prisma, which is now in production. <br />
                I gained large amount of toB experience from this project. Data security and data-centered user experience are the top concerns for real businesses. <br />
                <br />
                Due to some privacy concerns, you can only view the protected frontend source code on Github.
            </>
        ),
        image: [
            ydcrm.src,
            ydcrmAuth.src,
            ydcrmTasks.src,
            ydcrmData.src,
        ],
        buttonText: "See on Github",
        link: "https://github.com/Puggo1145/ydcrm-nextjs-frontend",
    }
];
