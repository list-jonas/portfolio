import { cn } from '@/lib/utils';
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
  return (
    <section className='mt-10 grid grid-rows-3 auto-rows-min h-min'>
      <p className='text-lg my-auto'>
        Here&apos;s where my creativity meets functionality.
      </p>
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
            <div key={`tech-stack-item-${index}`} className={cn(
              `rounded-lg shadow-lg ${item.color} text-white text-center relative h-12`,
              item.type === ETechStackType.FULL_STACK && 'col-span-2',
              item.type === ETechStackType.TOOLS && 'hidden sm:block',
              item.type === ETechStackType.DATABASE && 'hidden md:block',
              item.type === ETechStackType.TESTING && 'hidden lg:block',
            )}>
              <span className='absolute left-2 top-3'>{item.icon}</span>
              <p className='leading-[3rem]'>{item.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default TechStack;