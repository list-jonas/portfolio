import React from 'react';
import Logo from './logo';
import LangSelection from './lang-selection';
import { ThemeToggle } from '../theme/theme-toggle';
import ContactButton from './contact-button';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-5">
      <div className="w-full container flex justify-between">
        <Logo height={80} width={80} />
        <div className="my-auto flex flex-row flex-wrap gap-2 md:gap-4 mr-2 w-full justify-end">
          <LangSelection />
          <ThemeToggle />
          <ContactButton />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;