"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { useTranslations } from "next-intl"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("Nav");

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button variant="outline" className="duration-200" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
            <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">{t("themeTooltip")}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("themeTooltip")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
