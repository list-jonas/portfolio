"use client";

import { useEffect } from "react";
import { hotjar } from "react-hotjar";

const siteId = 5244022;
const hotjarVersion = 6;

const HotjarAnalytics = () => {
  useEffect(() => {
    hotjar.initialize({
      id: siteId,
      sv: hotjarVersion,
    });
  }, []);

  return <></>;
};

export default HotjarAnalytics;