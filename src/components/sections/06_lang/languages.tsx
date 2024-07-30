import BgGradient from '@/components/bg-gradient';
import Image from 'next/image';
import React from 'react';
import Text from '@/components/text';
import './languages.css';

const languages = [{
  name: 'TypeScript',
  icon: "/images/skills/TypeScript.svg",
}, {
  name: 'Python',
  icon: "/images/skills/Python-Dark.svg",
}, {
  name: 'Go',
  icon: "/images/skills/GoLang.svg",
}, {
  name: 'Java',
  icon: "/images/skills/Java-Dark.svg",
}, {
  name: 'C#',
  icon: "/images/skills/CS.svg",
}, {
  name: 'C++',
  icon: "/images/skills/CPP.svg",
}, {
  name: 'JavaScript',
  icon: "/images/skills/JavaScript.svg",
}, {
  name: 'Swift',
  icon: "/images/skills/Swift.svg",
}, {
  name: 'Kotlin',
  icon: "/images/skills/Kotlin-Dark.svg",
}, {
  name: 'Rust',
  icon: "/images/skills/Rust.svg",
}, {
  name: 'PHP',
  icon: "/images/skills/PHP-Dark.svg",
}, {
  name: 'PostgreSQL',
  icon: "/images/skills/PostgreSQL-Dark.svg",
}, {
  name: 'MongoDB',
  icon: "/images/skills/MongoDB.svg",
}, {
  name: 'HTML',
  icon: "/images/skills/HTML.svg",
}, {
  name: 'CSS',
  icon: "/images/skills/CSS.svg",
}, {
  name: 'Markdown',
  icon: "/images/skills/Markdown-Dark.svg",
}, {
  name: 'Dart',
  icon: "/images/skills/Dart-Dark.svg",
}, {
  name: 'NextJS',
  icon: "/images/skills/NextJS-Dark.svg",
}, {
  name: 'TailwindCSS',
  icon: "/images/skills/TailwindCSS-Dark.svg",
}, {
  name: 'Notion',
  icon: "/images/skills/Notion-Dark.svg",
}, {
  name: 'Figma',
  icon: "/images/skills/Figma-Dark.svg",
}, {
  name: 'Vercel',
  icon: "/images/skills/Vercel-Dark.svg",
}, {
  name: 'Spring',
  icon: "/images/skills/Spring-Dark.svg",
}, {
  name: 'Flask',
  icon: "/images/skills/Flask-Dark.svg",
}, {
  name: 'RegEx',
  icon: "/images/skills/RegEx-Dark.svg",
}, {
  name: 'PyTorch',
  icon: "/images/skills/PyTorch-Dark.svg",
}, {
  name: 'NodeJS',
  icon: "/images/skills/NodeJS-Dark.svg",
}];

const Languages = () => {
  return (
    <section className='relative py-20 flex flex-col'>
      <Text size="h2" variant="h2">Languages & Tools</Text>
      <Text size="p">
        Beyond my main stack, I have written code in multiple programming languages. Each one is a new perspective on problem-solving.
      </Text>

      <div className='relative w-full flex overflow-x-hidden [mask-image:linear-gradient(_to_right,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_1)_20%,_rgba(0,_0,_0,_1)_80%,_rgba(0,_0,_0,_0)_)] my-12'>
        <div className="animate-marquee whitespace-nowrap flex flex-row mx-0">
          {languages.map((language, index) => (
            <div key={index} className='mx-2 h-[96px] aspect-square'>
              <Image src={language.icon} height={96} width={96} alt={language.name} className='select-none' />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex flex-row mx-0">
          {languages.map((language, index) => (
            <div key={index} className='mx-2 h-[96px] aspect-square'>
              <Image src={language.icon} height={96} width={96} alt={language.name} className='select-none' /> {/* filter grayscale-[100%] */}
            </div>
          ))}
        </div>
      </div>

      <BgGradient bottom={-5} right={-10} size={20} color='orange-500' opacity={.2} />
    </section>
  );
};

export default Languages;