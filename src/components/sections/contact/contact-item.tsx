"use client";

import { Variants, m  } from 'framer-motion';
import React from 'react';

export interface ContactItemProps {
  id: number;
  name: string;
  designation: string;
  color?: string;
  href: string;
  element: JSX.Element;
}

const getRandomRotation = () => {
  return Math.floor(Math.random() * 30) - 15;
};

const contactVariants: Variants = {
  offscreen: {
    x: -400,
    y: getRandomRotation()*3,
    opacity: 0
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: getRandomRotation(),
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    y: -10,
    rotate: getRandomRotation(),
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    }
  }
};

const ContactItem: React.FC<ContactItemProps> = (item) => {
  return (
    <m.a
      className="relative flex flex-col items-center justify-center p-4"
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      target="_blank"
      viewport={{ once: true, amount: 0.8 }}
      href={item.href}
    >
      <div className="flex items-center justify-center z-10">
        {item.element}
      </div>
      <div className="flex flex-col items-center justify-center mt-4 z-10">
        <h2 className="text-xl">{item.name}</h2>
        <span className="text-sm">{item.designation}</span>
      </div>

      <m.span
        className={`absolute w-28 h-28 rounded-3xl ${item.color}`}
        variants={contactVariants}
        onHoverStart={(e) => e.preventDefault()}
      />
    </m.a>
  );
};

export default ContactItem;
