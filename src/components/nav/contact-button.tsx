import React from 'react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ChevronDown } from 'lucide-react';

const ContactButton = () => {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button className="font-normal" asChild>
            <a href="#contact">Contact<ChevronDown className="ml-2" /></a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Take initiative</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ContactButton;