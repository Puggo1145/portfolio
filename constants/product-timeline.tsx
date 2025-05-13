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
                We have currently gained <strong>4000+ users</strong>, with a <strong>70%+ daily user retention rate</strong>. Students love what we built. <br />
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
        time: "Feb 2024 - May 2024",
        heading: "Internship 1: Chengdu Huibian Technology",
        desc: (
            <>
                Frontend Developer <br />
                <br />
                1. Designed the mobile application product by leading UI technology selection and unified the design specifications through TailwindCSS to improve development efficiency <br />
                2. Simplified the business logic for users with by reconstructing the nested tree structure and splitting functions at different levels to reach easier and more intuitive understanding <br />
                3. Improved the performance of multi-tab pages on mobile devices by using partial lazy loading and data caching and integrated a highly cohesive skeleton screen design with a unique network request map to avoid data request conflicts and enhance user experience <br />
                4. Established a highly available UI design standard and its corresponding Vue component library as the company's standard component asset for use in other projects.  <br />
                <br />
                This internship was invaluable, marking a significant shift in my professional career as a student who, despite having limited technical experience at first, ultimately made a transformative growth. <br />
                <br />
                Due to some privacy concerns, I can only showcase the user interface design below.
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
                This app has helped my dad's company to effectively manage more than <strong>10k+ data</strong>, bringing more than <strong>30% efficiency improvement</strong>. <br />
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
                1. Participated in complete requirement reviews, scheduling, development, integration, testing, and deployment of B2B backend management project by collaborating with a team of over 50 people to ensure work efficiency. <br />
                2. Developed and iterated frontend functionality while maintaining the backend management system and H5 pages, including the product center, parameter validation, customer repayment deductions, and data verification pages <br />
                3. Iterated the backend system based on the micro-frontend framework Qiankun, encapsulated over 10 business and UI components, and optimized MobX for global state management across namespaces with TypeScript <br />
                4. Constructed frontend foundational projects, participated in the research and maintenance of a Node.js-based middle-platform permission system, and processed API request permission configurations, forwarding, and management to enhance the security and manageability of downstream projects <br />
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
