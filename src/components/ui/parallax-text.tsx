"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(4); // Standardmäßig auf 4 gesetzt, später dynamisch berechnet

  useEffect(() => {
    const calculateRepeats = () => {
      if (containerRef.current && children) {
        const containerWidth = containerRef.current.offsetWidth;
        const childWidth = containerRef.current.firstChild!.offsetWidth;
        const visibleRepeats = Math.ceil(window.innerWidth / childWidth);
        const totalRepeats = Math.ceil(containerWidth / childWidth) + visibleRepeats;

        setRepeatCount(totalRepeats + 1);
      }
    };

    calculateRepeats();

    window.addEventListener('resize', calculateRepeats);
    return () => window.removeEventListener('resize', calculateRepeats);
  }, [children]);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, v => `${wrap(-20, -20 - (repeatCount * 25), v)}%`);

  const childrenArray = Array(repeatCount).fill(children);

  return (
    <div className="parallax" ref={containerRef}>
      <motion.div className="w-full flex flex-nowrap gap-2" style={{ x }}>
        {childrenArray}
      </motion.div>
    </div>
  );
}

export default ParallaxText;