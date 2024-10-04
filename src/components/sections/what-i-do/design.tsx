"use client";

import { m } from "framer-motion";

const Design = () => {
  return (
    <m.div
      className="bg-accent/50 w-[100px] aspect-square rounded-3xl m-auto p-2"
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-accent-foreground h-8 w-8 rounded-full" />
      <div className="mt-2 space-y-2">
        <div className="bg-accent-foreground h-4 w-full rounded-lg" />
        <div className="bg-accent-foreground h-4 w-3/4 rounded-lg" />
      </div>
    </m.div>
  );
};

export default Design;
