"use client";

import { cn } from "@/lib/utils";
import Container from "./Container";

interface DebossedProps {
  children?: React.ReactNode;
  text?: string;
  outerClassName?: string;
  innerClassName?: string;
}

const Debossed = (props: DebossedProps) => {
  return (
    <Container className={cn("debossed-outer", props.outerClassName)}>
      <Container className={cn("debossed-inner h-full w-full", props.innerClassName)}>
        {props.children}
      </Container>
    </Container>
  );
};

export default Debossed;
