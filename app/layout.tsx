import type { Metadata } from "next";
import { Inter } from "next/font/google";
// components
import MyDock from "@/components/my-dock";
import GradientBackground from "@/components/gradient-background";
// providers
import { ThemeProvider } from "@/components/theme-provider";
// utils
import { cn } from "@/lib/utils";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


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
      <body className={cn(inter.className, 'w-screen h-screen flex flex-col items-center')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <MyDock />
          <GradientBackground />
        </ThemeProvider>
      </body>
    </html>
  );
}
