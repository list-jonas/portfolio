"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Origin = () => {
  return (
    <div className='max-md:mt-10 grid max-md:grid-rows-3 md:grid-cols-2'>
      <span className='h-min w-full text-xl my-auto'>
        ... from the heart of Austria.
      </span>
      <motion.span
        initial={{ x: 100, rotate: 5 }}
        animate={{ x: 0, rotate: -10 }}
        className='overflow-hidden rounded-lg shadow-lg w-full h-min max-md:row-span-2'
      >
        <Image src='/images/austria.jpg' height={640} width={426} alt='Austria' className='w-full' />
      </motion.span>
    </div>
  );
};

export default Origin;