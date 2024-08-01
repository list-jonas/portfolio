"use client";

import Text from '@/components/text';
import React from 'react';

const Loading = () => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl"><Text variant="gradient">Loading ...</Text></h1>
    </main>
  );
};

export default Loading;