import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localfont from "next/font/local";
import Navigation from "@/components/nav/nav";
import { getMessages } from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';

const generalSans = localfont({
  src: [{
    path: "../../../public/fonts/GeneralSans-Variable.ttf",
  }],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Jonas List Portfolio",
  description: "Portfolio of Jonas List, a software engineer based in Austria."
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
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
            <NextIntlClientProvider messages={messages}>
              <div className="relative">
                <Navigation />
                
                <main className="relative flex justify-center top-36 overflow-x-hidden">
                  {children}
                </main>
              </div>
            </NextIntlClientProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
