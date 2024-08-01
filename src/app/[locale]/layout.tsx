import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
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
  description: "Portfolio of Jonas List, a software engineer based in Austria.",
  twitter: {
    site: "@jonaslist",
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jonas-list.vercel.app",
    siteName: "Jonas List Portfolio",
    images: [
      {
        url: "https://jonas-list.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jonas List Portfolio",
      },
    ],
  },
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
      </body>
    </html>
  );
}
