"use client";

import React from "react";
import { cn } from "@/lib/utils";

type FormProps = {
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<"form">, "className">;

const Form = ({ className, children, ...rest }: FormProps) => {
  return (
    <form {...rest} className={cn(className, "space-y-4")}>
      {children}
    </form>
  );
};

export default Form;
