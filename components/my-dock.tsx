"use client";

import Image from "next/image";
import Link from "next/link";
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
        href: "https://www.notion.so/a2a1b91f880449e0923935d886cd8588",
    },
]

const MyDock: React.FC = () => {
    return (
        <div className="fixed w-full flex items-center bottom-4">
            <Dock
                className="bg-background rounded-full px-4"
                magnification={60}
                distance={100}
            >
                {Main.map(Icon =>
                    <DockIcon key={Icon.href} className="hover:bg-slate-200/50 dark:hover:bg-slate-700/50">
                        <Icon.icon size={24} />
                    </DockIcon>
                )}
                <Separator orientation="vertical" />
                {Social.map(Icon =>
                    <DockIcon key={Icon.href} className="hover:bg-slate-200/50 dark:hover:bg-slate-700/50">
                        <Link href={Icon.href} target="_blank" rel="noopener noreferrer">
                            <Image src={Icon.icon.light} alt="github" className="size-7 block dark:hidden" />
                            <Image src={Icon.icon.dark} alt="github" className="size-7 hidden dark:block" />
                        </Link>
                    </DockIcon>
                )}
                <Separator orientation="vertical" />
                <DockIcon className="hover:bg-slate-200/50 dark:hover:bg-slate-700/50">
                    <ColorTheme />
                </DockIcon>
            </Dock>
        </div>
    );
};

export default MyDock;