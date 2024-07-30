import React from 'react';
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';

const LangSelection = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">EN</Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default LangSelection;