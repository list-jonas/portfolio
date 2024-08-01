import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localfont from "next/font/local";
import Navigation from "@/components/nav/nav";

const generalSans = localfont({
  src: [{
    path: "../../public/fonts/GeneralSans-Variable.ttf",
  }],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Jonas List Portfolio",
  description: "Portfolio of Jonas List, a software engineer based in Austria.",
  icons: [{
    url: "/images/jl.svg",
    href: "/images/jl.svg",
  }]
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
              <Navigation />
              
              <main className="relative flex justify-center top-36 overflow-x-hidden">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
