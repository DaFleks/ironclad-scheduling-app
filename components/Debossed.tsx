"use client";

import Container from "./Container";

interface DebossedProps {
  children?: React.ReactNode;
  text?: string;
  flag?: boolean;
}

const Debossed = (props: DebossedProps) => {
  return (
    <Container noStyle className="debossed-outer">
      <Container noStyle className="debossed-inner">
        {props.children}
      </Container>
    </Container>
  );
};

export default Debossed;