"use client";

import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  as?: ElementType;
}

const Container = ({ className, children, as: Tag = "div" }: ContainerProps) => {
  return <Tag className={cn("p-4 mx-auto", className)}>{children}</Tag>;
};

export default Container;
