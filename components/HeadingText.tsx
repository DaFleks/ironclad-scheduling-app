"use client";

import { cn } from "@/lib/utils";

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingTextProps {
  children?: React.ReactNode;
  as?: Headings;
  className?: string;
}

const HeadingText = ({ children, as: Tag = "h1", className }: HeadingTextProps) => {
  let defaultClassName = "font-semibold";

  switch (Tag) {
    case "h1":
      defaultClassName += " text-6xl";
      break;
    case "h2":
      defaultClassName += " text-5xl";
      break;
    case "h3":
      defaultClassName += " text-4xl";
      break;
    case "h4":
      defaultClassName += " text-3xl";
      break;
    case "h5":
      defaultClassName += " text-2xl";
      break;
    case "h6":
      defaultClassName += " text-xl";
      break;
  }

  return <Tag className={`${cn(defaultClassName, className)}`}>{children}</Tag>;
};

export default HeadingText;
