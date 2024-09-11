import Navigation from "@/components/nav/nav";
import ParticlesOverlay from "@/components/particle-overlay";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localfont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

const generalSans = localfont({
  src: [
    {
      path: "../../../public/fonts/GeneralSans-Variable.ttf",
    },
  ],

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
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jonas List",
              jobTitle: "Freelancer",
              description: "Freelancer – Selbstständig",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hitzendorf",
                addressRegion: "Styria",
                addressCountry: "Austria",
              },
              url: "https://jonas-list.vercel.app/",
              sameAs: [
                "https://about.me/jonas.list",
                "https://www.linkedin.com/in/jonas-list-740230289/",
                "https://github.com/list-jonas",
                "https://orcid.org/0009-0006-2584-1078",
              ],
              image: "https://jonas-list.vercel.app/images/profile-image.jpg",
              email: "mailto:jonas.list.1289@gmail.com",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "HTBLA Kaindorf",
              },
              birthDate: "2005-10-08",
              knowsAbout: ["Software Engineering", "Web Development", "Design"],
            }),
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body style={{ height: "100%" }} className={generalSans.className}>
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
                <Suspense fallback={<></>}>
                  <ParticlesOverlay />
                </Suspense>
              </main>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
