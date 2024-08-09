import { cn } from "@/lib/utils";
import { Coffee } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CoffeeButtonProps {
  className?: string;
}

const CoffeeButton = ({ className }: CoffeeButtonProps) => {
  const t = useTranslations("Nav");

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn("font-normal", className)}
            asChild
          >
            <Link
              href={"https://buymeacoffee.com/jonasl"}
              target="blank"
              aria-label="Buy me a coffee"
            >
              <Coffee />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("coffeeTooltip")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CoffeeButton;
