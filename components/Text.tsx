"use client";

import React, { CSSProperties, ElementType, ComponentPropsWithoutRef } from "react";

type Texts = "p" | "span";

type TextProps<T extends Texts = "p"> = {
  children?: React.ReactNode;
  as?: T;
  className?: string;
  style?: CSSProperties;
} & ComponentPropsWithoutRef<T>;

const Text = <T extends Texts = "p">({ children, as, className, style, ...props }: TextProps<T>) => {
  const Tag = as || "p";
  return (
    <Tag className={className} style={style} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
