import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const LangSelection = () => {
  const t = useTranslations('Nav');

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="outline">{t("lang")}</Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={5} align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/en" locale="en">EN</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/de" locale="de">DE</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent side="bottom">{t("langTooltip")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LangSelection;