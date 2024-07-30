import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import localfont from "next/font/local";
import LangSelection from "@/components/lang-selection";

const generalSans = localfont({
  src: [{
    path: "../../public/fonts/GeneralSans-Variable.ttf",
  }],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Jonas List Portfolio",
  description: "Portfolio of Jonas List, a software engineer based in Austria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{height: "100%"}} className={generalSans.className}>
        <Analytics />
        <SpeedInsights />
      
        <Suspense fallback={<Loading />} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative">
              <nav className="absolute top-0 left-0 right-0 z-50 py-5">
                <div className="w-full sm:container flex justify-between">
                  <Logo height={80} width={80} />
                  <div className="my-auto flex flex-row gap-2 md:gap-4 mr-2">
                    <LangSelection />
                    <ThemeToggle />
                    <Button className="font-normal" asChild><a href="#contact">Contact<ChevronDown className="ml-2" /></a></Button>
                  </div>
                </div>
              </nav>
              
              <main className="relative p-2 flex justify-center top-36 overflow-x-hidden">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
