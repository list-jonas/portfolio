"use client"

import React from 'react';
import Title from './title';
import BgGradient from '@/components/bg-gradient';

const Hero = () => {
  return (
    <header className='relative'>
      <Title />
      
      <BgGradient top={8} right={-5} size={20} color="red-500" opacity={.1} />
      <BgGradient top={5} left={1} size={15} color="orange-500" opacity={.2} />
    </header>
  );
};

export default Hero;