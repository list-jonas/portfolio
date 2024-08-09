import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const ContactButton = () => {
  const t = useTranslations("Nav");
  const locale = useLocale();

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button className="font-normal" asChild>
            <Link href={`${locale}/#contact`}>
              {t("contact")}
              <ChevronDown className="ml-2" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("contactTooltip")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ContactButton;
