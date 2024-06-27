import BgGradient from '@/components/bg-gradient';
import Image from 'next/image';
import React from 'react';
import './languages.css';

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
    <section className='relative mt-10 flex flex-col w-full'>
      <p className='text-lg'>
        Beyond my main stack, I&apos;m fluent in multiple programming languages. Each one is a new perspective on problem-solving.
      </p>

      <div className='relative w-full flex overflow-x-hidden [mask-image:linear-gradient(_to_right,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_1)_20%,_rgba(0,_0,_0,_1)_80%,_rgba(0,_0,_0,_0)_)]'>
        <div className="py-12 animate-marquee whitespace-nowrap flex flex-row mx-0">
          {languages.map((language, index) => (
            <div key={index} className='w-[98px] h-[98px] text-center'>
              <Image src={language.icon} height={98} width={98} alt={language.name} className='m-auto select-none language-logo' />
            </div>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row mx-0">
          {languages.map((language, index) => (
            <div key={index} className='w-[98px] h-[98px] text-center'>
              <Image src={language.icon} height={98} width={98} alt={language.name} className='m-auto select-none language-logo' />
            </div>
          ))}
        </div>
      </div>

      <BgGradient bottom={-5} right={-10} size={20} color='orange-500' opacity={.2} />
    </section>
  );
};

export default Languages;