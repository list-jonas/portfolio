"use client";

import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';
 
export default function NotFound() {
  const locale = useLocale();

  if (locale !== 'en' && locale !== 'de') {
    return redirect('/en/404');
  }

  return redirect(`/${locale}/404`);
}