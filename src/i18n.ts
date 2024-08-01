import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { localesAsStrings } from './lib/locales';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!localesAsStrings.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});