import { cn } from "@/lib/utils";
import React, { CSSProperties, ElementType, ComponentPropsWithoutRef } from "react";

type Containers = "div" | "header" | "nav" | "main" | "section" | "article" | "aside" | "footer";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  padded?: boolean;
  center?: boolean;
  style?: CSSProperties;
} & ComponentPropsWithoutRef<T>;

const Container = <T extends Containers = "div">({ children, as, className, padded, center, style, ...props }: ContainerProps<T>) => {
  const Tag = as || "div";
  return (
    <Tag className={cn(className, `${padded && "p-4"} ${center && "mx-auto"}`)} style={style} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
