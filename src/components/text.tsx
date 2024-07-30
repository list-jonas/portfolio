import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const textVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: "",
        gradient: "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500",
        h2: "text-secondary-foreground uppercase",
      },
      size: {
        default: "",
        p: "text-lg sm:text-2xl",
        h1: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        h2: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    let Component: React.ElementType = 'span';

    if (size === 'p') Component = 'p';
    else if (size === 'h1') Component = 'h1';
    else if (size === 'h2') Component = 'h2';


    if (asChild) Component = React.Fragment;

    return (
      <Component
        className={cn(textVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
export default Text;