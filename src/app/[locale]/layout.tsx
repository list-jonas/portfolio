import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localfont from "next/font/local";
import Navigation from "@/components/nav/nav";
import { getMessages } from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';
import { Html } from "next/document";
import Head from "next/head";

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
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    siteName: "Jonas List Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og`,
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
    <Html lang={locale}>
      <Head>
        {/* Structured Data */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Jonas List",
                "jobTitle": "Freelancer",
                "description": "Freelancer – Selbstständig",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Hitzendorf",
                  "addressRegion": "Styria",
                  "addressCountry": "Austria"
                },
                "url": "https://jonas-list.vercel.app/",
                "sameAs": [
                  "https://about.me/jonas.list",
                  "https://www.linkedin.com/in/jonas-list-740230289/",
                  "https://github.com/list-jonas",
                  "https://orcid.org/0009-0006-2584-1078"
                ]
              })
            }}
          />
      </Head>
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
    </Ht>
  );
}
