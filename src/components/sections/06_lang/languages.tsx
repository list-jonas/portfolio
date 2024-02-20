import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ParallaxText from '@/components/ui/parallax-text';
import Image from 'next/image';
import React from 'react';

interface ILanguage {
  name: string;
  icon: string;
}

const languages = [{
  name: 'TypeScript',
  icon: "/images/typescript.png",
}, {
  name: 'Python',
  icon: "/images/python.png",
}, {
  name: 'Go',
  icon: "/images/golang.png",
}, {
  name: 'Java',
  icon: "/images/java-coffee-cup-logo.png",
}, {
  name: 'C#',
  icon: "/images/c-sharp-logo.png",
  color: 'bg-purple-500',
}, {
  name: 'C++',
  icon: "/images/c-plus-plus-logo.png",
}, {
  name: 'JavaScript',
  icon: "/images/javascript.png",
}, {
  name: 'Swift',
  icon: "/images/swift.png",
}];

const Languages = () => {
  return (
    <div className='mt-10 flex flex-col w-full'>
      <p className='text-lg'>
        Beyond my main stack, I&apos;m fluent in multiple programming languages. Each one is a new perspective on problem-solving.
      </p>
      <div className='w-full row-span-2 my-8'>
        <ParallaxText baseVelocity={2}>
          {languages.map((language, index) => (
            <div key={`lang-${index}`} className='w-[180px] border rounded-lg'>
              <div className='text-center text-lg font-bold'>
                {language.name}
              </div>
              <div className='h-28 aspect-square'>
                <Image src={language.icon} height={98} width={98} alt={language.name} className='m-auto select-none' />
              </div>
            </div>
          ))}
        </ParallaxText>
      </div>
    </div>
  );
};

export default Languages;