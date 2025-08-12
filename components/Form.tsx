"use client";

import { cn } from "@/lib/utils";

const Form = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <form className={cn(className, "space-y-4")}>{children}</form>;
};

export default Form;
