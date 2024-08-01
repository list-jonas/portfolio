"use client";

import React, { useState, useEffect } from 'react';
import { Progress } from '../ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface Expertise {
  name: string;
  percentage: number;
}

const expertises: Expertise[] = [{
  name: 'Front-end',
  percentage: 90
}, {
  name: 'Back-end',
  percentage: 33
}, {
  name: 'DevOps',
  percentage: 50
}, {
  name: 'Design',
  percentage: 30
}, {
  name: 'UX',
  percentage: 50
}]

const ExpertiseDisplay = () => {
  const [progress, setProgress] = useState(expertises[0].percentage);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % expertises.length);
    };

    const timer = setInterval(updateProgress, 2000); // Update every 2 seconds

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setProgress(expertises[currentIndex].percentage);
  }, [currentIndex]);

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger className='w-52 my-auto relative'>
          <div className='w-52 my-auto relative'>
            <Progress value={progress} className='w-full' />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-md text-secondary-foreground'>
                {expertises[currentIndex].name}
              </span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          My expertise in {expertises[currentIndex].name.toLowerCase()}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ExpertiseDisplay;