import Text from '@/components/text';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  const t = useTranslations('NotFound');

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
          <Text variant="gradient">{t('title')}</Text>
        </h1>
        <p className="mt-6 text-base leading-7 text-secondary-foreground">
          {t('description')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">{t('goHome')}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;