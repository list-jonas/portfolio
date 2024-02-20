import React from 'react';
import Animation from './animation';
import Responsive from './responsive';
import Design from './design';

const WhatIdo = () => {
  return (
    <section className='mt-10'>
      <h2 className='text-center text-5xl'>What I do</h2>
      <div className="flex flex-row flex-wrap items-center justify-center my-8 w-full gap-4 text-white">
        <div className='rounded-3xl h-[230px] max-sm:w-full sm:aspect-square bg-gradient-to-br from-red-500 to-orange-600 flex flex-col'>
          <Design />
          <div className='h-1/4'>
            <h3 className='text-lg text-center font-bold'>Design</h3>
          </div>
        </div>

        <div className='rounded-3xl h-[230px] max-sm:w-full sm:aspect-square bg-gradient-to-br from-orange-600 to-orange-500 flex flex-col'>
          <Animation />
          <div className='h-1/4'>
            <h3 className='text-lg text-center font-bold'>Animation</h3>
          </div>
        </div>

        <div className='rounded-3xl h-[230px] max-sm:w-full sm:aspect-square bg-gradient-to-br from-orange-500 to-orange-400 flex flex-col'>
          <Responsive />
          <div className='h-1/4'>
            <h3 className='text-lg text-center font-bold'>Responsive</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;