"use client";

import { cn } from "@/lib/utils";
import { FormEventHandler } from "react";

const Form = ({ children, className, onSubmit }: { children: React.ReactNode; className?: string; onSubmit?: FormEventHandler<HTMLFormElement> }) => {
  return (
    <form onSubmit={onSubmit} className={cn(className, "space-y-4")}>
      {children}
    </form>
  );
};

export default Form;
