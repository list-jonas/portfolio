import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/lib/locales';

const LangSelection = () => {
  const t = useTranslations('Nav');
  const locale = useLocale();
  

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">{t("lang")}</Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={5} align="center">
            <DropdownMenuGroup>
              {locales.map((lang) => (
                <DropdownMenuItem asChild key={lang.key} className={locale === lang.key ? 'bg-secondary' : ''}>
                  <Link href={`/${lang.key}`} locale={lang.key} className={lang.generated ? 'cursor-pointer font-light italic' : 'cursor-pointer'}>
                    <lang.icon className='h-4 rounded-sm mr-2' /> {lang.key.toUpperCase()}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent side="bottom">{t("langTooltip")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LangSelection;