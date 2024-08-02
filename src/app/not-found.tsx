import Text from '@/components/text';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-primary">404</p>
              <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl"><Text variant="gradient">Page not found</Text></h1>
              <p className="mt-6 text-base leading-7 text-secondary-foreground">Sorry, but this page doesn&apos;t seem like it is part of my portfolio.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <Link href="/">Go back home</Link>
                </Button>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default NotFound;