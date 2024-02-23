import { motion } from 'framer-motion';
import React from 'react';

const Title = () => {
  return (
    <motion.h1 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="text-5xl font-bold text-center mt-20 mb-10"
    >
      <div className='mb-4'>
        Hi!
      </div>
      <span className='mr-2 leading-10'>
        I&apos;m
      </span>
      <motion.span 
        initial={{ x: 50, rotate: -2 }}
        animate={{ x: 0, rotate: 2 }}
        className='text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500'
      >
        Jonas List
      </motion.span>
      ,
    </motion.h1>
  );
};

export default Title;