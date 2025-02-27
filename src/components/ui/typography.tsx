import React from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "large" | "small" | "muted";
  children: React.ReactNode;
  className?: string;
};

const variantStyles: Record<string, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-md font-semibold tracking-tight",
  p: "",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

const ParagraphVariants = ["p", "large", "muted"];

export function Typography({
  variant = "p",
  children,
  className = "",
}: TypographyProps) {
  const Component = ParagraphVariants.includes(variant) ? "p" : variant;
  const classes = `${variantStyles[variant]} ${className}`;

  return React.createElement(Component, { className: classes }, children);
}
