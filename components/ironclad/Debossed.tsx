"use client";

import { cn } from "@/lib/utils";
import Container from "./Container";

interface DebossedProps {
  children?: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

const Debossed = ({ children, outerClassName, innerClassName }: DebossedProps) => {
  return (
    <Container className={cn("debossed-outer", outerClassName)}>
      <Container className={cn("debossed-inner h-full w-full", innerClassName)}>
        {children}
      </Container>
    </Container>
  );
};

export default Debossed;
