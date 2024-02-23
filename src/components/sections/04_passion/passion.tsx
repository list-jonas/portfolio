"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Passion = () => {
  return (
    <section className='mt-10 grid max-md:grid-rows-3 md:grid-cols-2 h-min'>
      <motion.span
        initial={{ x: -100, rotate: -2}}
        animate={{ x: -50, rotate: 6 }}
        className='overflow-hidden rounded-lg shadow-lg w-full h-min max-md:row-span-2'
      >
        <Image src='/images/digitization.jpg' height={427} width={640} alt='Austria' />
      </motion.span>
      <p className='h-min w-full text-right text-xl my-auto'>
        Programming isn't just a skill,<br />
        it's my way of making ideas tangible.<br />
        I thrive on solving problems and<br />
        building solutions that matter.
      </p>
    </section>
  );
};

export default Passion;