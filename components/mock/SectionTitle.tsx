"use client";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: String;
  subTitle?: String;
  className?: String;
}

const SectionTitle = ({ title, subTitle, className }: SectionTitleProps) => {
  return (
    <div className={cn("font-semibold", className)}>
      <h5 className="text-xl">{title}</h5>
      <span className="text-sm text-neutral-400">{subTitle}</span>
    </div>
  );
};

export default SectionTitle;
