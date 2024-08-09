import React from "react";

interface BgGradientProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size?: number;
  opacity?: number;
  color: string;
}

const BgGradient: React.FC<BgGradientProps> = ({
  top,
  bottom,
  left,
  right,
  size = 10,
  opacity = 0.5,
  color,
}) => {
  const rightOrLeft = right ? { right: `${right}rem` } : { left: `${left}rem` };
  const topOrBottom = top ? { top: `${top}em` } : { bottom: `${bottom}em` };

  const styles = {
    ...topOrBottom,
    ...rightOrLeft,
    width: `${size}rem`,
    height: `${size}rem`,
    opacity: opacity,
  };

  return (
    <div
      className={`absolute -z-10 right-3 bg-${color} rounded-full mix-blend-multiply filter blur-3xl`}
      style={styles}
    />
  );
};

export default BgGradient;
