"use client";

import Container from "./Container";

const MainPanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container className="relative bg-gradient-to-tr from-neutral-800 to-neutral-900 w-full border border-neutral-600 shadow-lg shadow-neutral-900 rounded">
      {children}
    </Container>
  );
};

export default MainPanel;
