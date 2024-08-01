import React from 'react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ContactButton = () => {
  const t = useTranslations('Nav');

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button className="font-normal" asChild>
            <Link href="/#contact">{t("contact")}<ChevronDown className="ml-2" /></Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("contactTooltip")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ContactButton;