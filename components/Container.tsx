"use client";

import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface ContainerProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  as?: ElementType;
  noStyle?: boolean;
}

const Container = ({ id, className, children, as: Tag = "div", noStyle }: ContainerProps) => {
  return (
    <Tag id={id} className={cn(noStyle ? "" : "p-4 mx-auto", className)}>
      {children}
    </Tag>
  );
};

export default Container;
