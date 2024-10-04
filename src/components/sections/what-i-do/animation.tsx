"use client";

import { Variants, m } from "framer-motion";
import { useEffect, useState } from "react";

const container: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    rotate: 90,
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    x: 100,
    transition: { duration: 0.5 },
  },
};

const Animation = () => {
  const [cycle, setCycle] = useState<"hidden" | "visible" | "exit">("hidden");

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      while (isMounted) {
        setCycle("visible");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Duration of visible phase
        setCycle("exit");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Duration of exit phase
        setCycle("hidden");
        await new Promise((resolve) => setTimeout(resolve, 500)); // Pause before restarting animation
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <m.ul
      initial="hidden"
      animate={cycle}
      variants={container}
      whileTap={{ scale: 0.9 }}
      exit="exit"
      className="bg-accent/50 w-[100px] aspect-square rounded-3xl m-auto grid grid-cols-2 grid-rows-2 overflow-hidden shadow-lg"
    >
      {[0, 1, 2, 3].map((index) => (
        <m.li
          key={index}
          variants={item}
          className="bg-accent-foreground w-[35px] aspect-square rounded-full m-auto"
        />
      ))}
    </m.ul>
  );
};

export default Animation;
