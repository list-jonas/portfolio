"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Education = () => {
  return (
    <section className='mt-10 w-full grid max-md:grid-rows-3 md:grid-cols-2'>
      <motion.span
        initial={{ x: -100, rotate: -2}}
        animate={{ x: 0, rotate: -1 }}
        className='overflow-hidden rounded-lg shadow-lg h-min max-md:row-span-2'
      >
        <Image src='/images/htbla_kaindorf_crop.jpg' height={428} width={751} alt='Austria' />
      </motion.span>
      <p className='w-full h-min text-right text-xl my-auto'>
        ... a passionate programmer and
        <br />
        student at HTBLA Kaindorf
      </p>
    </section>
  );
};

export default Education;