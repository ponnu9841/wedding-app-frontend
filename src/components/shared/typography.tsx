import React from "react";
import { cn } from "@/lib/utils";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  children: React.ReactNode;
};

const variantStyles = {
  h1: "text-4xl md:text-5xl font-playfair-display",
  h2: "text-2xl md:text-3xl font-playfair-display",
  h3: "text-base 3xl:text-lg font-medium",
  h4: "text-md font-medium",
  h5: "text-base font-medium",
  h6: "text-sm font-medium",
  p: "text-base",
};

const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
  const Component = variant as keyof React.JSX.IntrinsicElements;
  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;

