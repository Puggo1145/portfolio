import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// components
import MyDock from "@/components/my-dock";
import GradientBackground from "@/components/gradient-background";
import { CircleIndicator } from "@/components/motions/scroll-indicator";
// providers
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
// utils
import { cn } from "@/lib/utils";


import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puggo Portfolio",
  description: "My portfolio website where I explore new technologies and showcase my projects.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'w-full h-screen flex flex-col items-center')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CircleIndicator />
          {children}
          <MyDock />
          <GradientBackground />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
