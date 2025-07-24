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
// meow planet
import meowPlanetWeb from "@/assets/images/meow-planet-web.png";
import meowPlanetWeb2 from "@/assets/images/meow-planet-web2.png";
// cqnu mini
import cqnumini from "@/assets/images/cqnu-mini.png";
import cqnuminiStudy from "@/assets/images/cqnu-mini-study.png";
import cqnuminiSchedule from "@/assets/images/cqnu-mini-schedule.png";
import cqnuminiService from "@/assets/images/cqnu-mini-service.png";
// huibian
import bbt1 from "@/assets/images/bbt1.png";
import bbt2 from "@/assets/images/bbt2.png";
import bbt3 from "@/assets/images/bbt3.png";
import bbt4 from "@/assets/images/bbt4.png";
// ydcrm
import ydcrm from "@/assets/images/ydcrm.png";
import ydcrmAuth from "@/assets/images/ydcrm-auth.png";
import ydcrmTasks from "@/assets/images/ydcrm-tasks.png";
import ydcrmData from "@/assets/images/ydcrm-data.png";
// micfc
import micfc from "@/assets/images/micfc.png";
// usc
import uscViterbi from "@/assets/images/usc-viterbi.jpg"

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
        time: "Dec 2022",
        heading: "EveryMusic: The turning point",
        desc: (
            <>
                I built <strong>EveryMusic (Everyone is a musician)</strong> this year, a public welfare interactive music classroom learning software, aimed at under-resourced primary school students for their music education,
                effectively replicating the music teaching process of traditional classrooms and optimizing the teaching design for the targeted educational scenarios with high interactivity. <br />
                <br />
                Together with my team, we brought EveryMusic to life in several country primary schools across Chongqing, and shared our software to around <strong>600+ students</strong>. The joy that radiated from those young kids touched our hearts deeply.
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
        time: "May 2023",
        heading: "Meow Planet MVP/Web: A less successful story",
        desc: (
            <>
                Discover, care for, and share the joy of stray cats on campus. Meow Planet is a public welfare social media app dedicated to bringing people and cats together, creating meaningful connections and spreading love. <br />
                <br />
                I launched an MVP featuring a simple activity where users could share their stories with cats in exchange for cat treats. We gained <strong>1000+ users</strong> and <strong>500+ stories</strong> within a week. <br />
                Unfortunately, due to my busy schedule, I missed the optimal timing to release version 1.0, and the app gradually lost traction as active users left campus. <br />
                <br />
                What I learned: <br />1. Carpe diem. Seize the day; <br />2. Do it quick before environment changes; <br />3. User engagement and retention is the lifeblood of social media apps.
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
        time: "Sep 2023 - Present",
        heading: "CQNU Intellisense: Learn to build something smaller but useful",
        desc: (
            <>
                A campus mini-program, designed to facilitate social and lifestyle services at Chongqing Normal University. (v2.0)<br />
                We have gained <strong>5000+ users</strong>, with a <strong>70%+ daily user retention rate</strong>. Students love what we built. <br />
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
        time: "Feb 2024 - May 2024",
        heading: "Internship 1: Huibian Technology",
        desc: (
            <>
                Software Engineer Intern <br />
                <br />
                This internship was invaluable, marking a significant shift in my professional career as a student who, despite having limited technical experience at first, ultimately made a transformative growth. <br />
                <br />
                Due to some privacy concerns, I can only showcase some of the user interface design below.
            </>
        ),
        image: [
            bbt1.src,
            bbt2.src,
            bbt3.src,
            bbt4.src,
        ]
    },
    {
        time: "May 2024 - Present",
        heading: "Yueda CRM - Explore the state of the art and real business",
        desc: (
            <>
                A fullstack CRM system created for my dad's company with cutting-age tech stacks such as Next.js, server actions and prisma, which is now in production. <br />
                This app has helped my dad's company to effectively manage more than <strong>30k+ data</strong>, bringing more than <strong>150% efficiency improvement</strong>. <br />
                <br />
                Due to some privacy concerns, you can only view the specially processed frontend source code on Github.
            </>
        ),
        image: [
            ydcrm.src,
            ydcrmAuth.src,
            ydcrmTasks.src,
            ydcrmData.src,
        ],
        buttonText: "See frontend demo on Github",
        link: "https://github.com/Puggo1145/ydcrm-nextjs-frontend",
    },
    {
        time: "Oct 2024 - Dec 2024",
        heading: "Internship 2: Xiaomi Consumer Finance",
        desc: (
            <>
                Software Engineer Intern <br />
                <br />
                Gained a deeper understanding of software development process in a larger company. <br />
                Improved my fullstack skills. Learned micro-frontend for the first time. <br />
                Impressed by how people can organize these huge and complex projects so well through professional software engineering.<br />
                Worked with nice people from different teams, departments. <br />
                <br />
                And eat a lot of delicious food~
            </>
        ),
        image: [
            micfc.src,
        ],
    },
    {
        time: "Aug 2025 - Future",
        heading: "Computer Science in the University of Southern California",
        desc: (
            <>
                Embarking on my further Computer Science study at the University of Southern California starting Fall 2025. <br />
            </>
        ),
        image: [
            uscViterbi.src,
        ],
    },
];
