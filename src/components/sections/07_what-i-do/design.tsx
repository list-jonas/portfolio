"use client";

import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import React from 'react';

const Design = () => {
  return (
    <motion.div
      className="bg-white/20 w-[100px] aspect-square rounded-3xl m-auto p-2"
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-background h-8 w-8 rounded-full" />
      <div className="mt-2 space-y-2">
        <div className="bg-background h-4 w-full rounded-lg" />
        <div className="bg-background h-4 w-3/4 rounded-lg" />
      </div>
    </motion.div>
  );
};

export default Design;