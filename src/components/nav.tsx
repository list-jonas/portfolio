import React from 'react';
import Logo from './logo';
import LangSelection from './lang-selection';
import { ThemeToggle } from './theme/theme-toggle';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-5">
      <div className="w-full container flex justify-between">
        <Logo height={80} width={80} />
        <div className="my-auto flex flex-row flex-wrap gap-2 md:gap-4 mr-2 w-full justify-end">
          <LangSelection />
          <ThemeToggle />
          <Button className="font-normal" asChild><a href="#contact">Contact<ChevronDown className="ml-2" /></a></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;