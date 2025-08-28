"use client";

import Container from "./Container";

const isLoggedIn = true; // [TODO] replace with NextAuth

const MainPanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container id="main-panel-container" as="main" className={`relative bg-black-primary ${isLoggedIn ? 'w-[90%] xl:h-[90%]' : 'w-[90%] md:w-[70%] border border-neutral-600'} h-3/4 shadow-lg shadow-neutral-900 rounded`}>
      {children}
    </Container>
  );
};

export default MainPanel;
