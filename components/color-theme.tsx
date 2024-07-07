"use client"

import { useTheme } from "next-themes"
// components
import { Button } from "@/components/ui/button"
// ui
import { Moon, Sun } from "lucide-react"


export function ColorTheme() {
    const { theme, setTheme } = useTheme()

    const onSetTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div
            onClick={onSetTheme}
            className="relative size-8 flex items-center justify-center"
        >
            <Sun className="absolute size-6 scale-100 dark:scale-0" />
            <Moon className="absolute size-6 scale-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </div>
    )
}
