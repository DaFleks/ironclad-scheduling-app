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
      defaultClassName += " text-2xl";
      break;
    case "h2":
      defaultClassName += " text-xl";
      break;
    case "h3":
      defaultClassName += " text-lg";
      break;
    case "h4":
      defaultClassName += " text-base";
      break;
    case "h5":
      defaultClassName += " text-sm";
      break;
    case "h6":
      defaultClassName += " text-xs";
      break;
  }

  return <Tag className={`${cn(defaultClassName, className)}`}>{children}</Tag>;
};

export default HeadingText;
