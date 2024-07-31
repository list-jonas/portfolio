"use client";

import BgGradient from '@/components/bg-gradient';
import Text from '@/components/text';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Blocks, CheckCircle, Cloud, Code, Database, GitBranch, Layers } from 'lucide-react';
import React from 'react';

enum ETechStackType {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULL_STACK = 'Full Stack',
  DATABASE = 'Database',
  TOOLS = 'Tools',
  TESTING = 'Testing',
}


interface TechStackItem {
  name?: string;
  icon?: React.ReactNode;
  color?: string;
  type: ETechStackType;
}

const techStack: (TechStackItem)[] = [{
  name: 'TypeScript',
  icon: <Code />,
  color: 'bg-orange-500',
  type: ETechStackType.FULL_STACK,
}, {
  name: 'PostgreSQL',
  icon: <Database />,
  color: 'bg-orange-600',
  type: ETechStackType.DATABASE,
}, {
  name: 'Docker',
  icon: <Blocks />,
  color: 'bg-orange-400',
  type: ETechStackType.TOOLS,
}, {
  name: 'Jest',
  icon: <CheckCircle />,
  color: 'bg-red-400',
  type: ETechStackType.TESTING,
}, {
  name: 'NextJS',
  icon: <Code />,
  color: 'bg-orange-500',
  type: ETechStackType.FULL_STACK,
}, {
  type: ETechStackType.DATABASE,
}, {
  name: 'GitHub',
  icon: <GitBranch />,
  color: 'bg-orange-700',
  type: ETechStackType.TOOLS,
}, {
  name: 'Cypress',
  icon: <CheckCircle />,
  color: 'bg-red-500',
  type: ETechStackType.TESTING,
}, {
  name: 'TailwindCSS',
  icon: <Layers />,
  color: 'bg-red-500',
  type: ETechStackType.FRONTEND,
}, {
  name: 'Prisma',
  icon: <Database />,
  color: 'bg-orange-600',
  type: ETechStackType.BACKEND,
}, {
  type: ETechStackType.DATABASE,
}, {
  name: 'Vercel',
  icon: <Cloud />,
  color: 'bg-red-600',
  type: ETechStackType.TOOLS,
}, {
  type: ETechStackType.TESTING,
}, {
  name: 'Shadcn/ui',
  icon: <Layers />,
  color: 'bg-orange-400',
  type: ETechStackType.FRONTEND,
}];

const TechStack = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='py-20 container relative'>
      <Text size="h2" variant="h2">Tech Stack</Text>
      <Text size="p" className='mb-10'>
        Here&apos;s where my creativity meets functionality.
      </Text>

      <div className='row-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
        {Object.values(ETechStackType).map((type, index) => {
          if (type === ETechStackType.FULL_STACK) return null;
          return (
            <div key={`tech-stack-type-${index}`} className={cn(
              'text-center font-bold',
              type === ETechStackType.TOOLS && 'hidden sm:block',
              type === ETechStackType.DATABASE && 'hidden md:block',
              type === ETechStackType.TESTING && 'hidden lg:block',
            )}>
              {type}
            </div>
          )
        })}
        {techStack.map((item, index) => {
          if (!item.name) return <div key={`tech-stack-item-${index}`} className={cn(
              item.type === ETechStackType.TOOLS && 'hidden sm:block',
              item.type === ETechStackType.DATABASE && 'hidden md:block',
              item.type === ETechStackType.TESTING && 'hidden lg:block',
            )}/>;

          return (
            <motion.div 
              key={`tech-stack-item-${index}`} 
              className={cn(
                `rounded-lg shadow-lg cursor-default ${item.color} text-white text-center relative h-12`,
                item.type === ETechStackType.FULL_STACK && 'col-span-2',
                item.type === ETechStackType.TOOLS && 'hidden sm:block',
                item.type === ETechStackType.DATABASE && 'hidden md:block',
                item.type === ETechStackType.TESTING && 'hidden lg:block',
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className='absolute left-2 top-3'>{item.icon}</span>
              <p className='leading-[3rem]'>{item.name}</p>
            </motion.div>
          )
        })}
      </div>

      <BgGradient top={-5} left={-10} size={20} color='orange-500' opacity={.1} />
    </section>
  );
};

export default TechStack;