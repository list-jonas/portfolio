"use client";

import { domMax, LazyMotion } from "framer-motion";
import React from "react";

const LazyMotionWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
};

export default LazyMotionWrapper;
