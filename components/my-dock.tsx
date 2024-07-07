import Image from "next/image";
// ui
import { Dock, DockIcon } from "./magicui/dock";
import { Separator } from "./ui/separator";
// components
import { ColorTheme } from "@/components/color-theme";
// icons
import { HomeIcon, PenLineIcon } from "lucide-react";
import GithubIconBlack from "@/assets/icons/github-black.svg";
import GithubIconWhite from "@/assets/icons/github-white.svg";
import NotionIconBlack from "@/assets/icons/notion-black.svg";
import NotionIconWhite from "@/assets/icons/notion-white.svg";

const Main = [
    {
        icon: HomeIcon,
        href: "/",
    },
    {
        icon: PenLineIcon,
        href: "/blog",
    },
];
const Social = [
    {
        icon: {
            light: GithubIconBlack,
            dark: GithubIconWhite,
        },
        href: "https://github.com/Puggo1145",
    },
    {
        icon: {
            light: NotionIconBlack,
            dark: NotionIconWhite,
        },
        href: "notion",
    },
]

const MyDock: React.FC = () => {
    return (
        <div className="fixed w-full flex items-center bottom-4">
            <Dock
                className="bg-background"
                magnification={60}
                distance={100}
            >
                {Main.map(Icon =>
                    <DockIcon key={Icon.href} className="hover:bg-slate-200/50">
                        <Icon.icon size={24} />
                    </DockIcon>
                )}
                <Separator orientation="vertical" />
                {Social.map(Icon =>
                    <DockIcon key={Icon.href} className="hover:bg-slate-200/50">
                        <Image src={Icon.icon.light} alt="github" className="size-7 block dark:hidden" />
                        <Image src={Icon.icon.dark} alt="github" className="size-7 block hidden dark:block" />
                    </DockIcon>
                )}
                <Separator orientation="vertical" />
                <DockIcon className="hover:bg-slate-200/50">
                    <ColorTheme />
                </DockIcon>
            </Dock>
        </div>
    );
};

export default MyDock;