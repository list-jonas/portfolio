// Since we have a root `not-found.tsx` page, a layout file

// is required, even if it's just passing children through.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
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
              image: "https://jonas-list.vercel.app/images/profile-image.png",
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
      {children}
    </html>
  );
}
