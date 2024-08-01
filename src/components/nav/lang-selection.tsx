import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const LangSelection = () => {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="outline">EN</Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={5} align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem>EN</DropdownMenuItem>
              <DropdownMenuItem>DE</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent side="bottom">Select Language</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LangSelection;