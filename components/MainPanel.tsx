"use client";

import Container from "./Container";

const MainPanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container id="main-panel-container" as="main" className={`relative bg-black-primary w-full h-[90%] shadow-lg shadow-neutral-900 rounded`}>
      {children}
    </Container>
  );
};

export default MainPanel;